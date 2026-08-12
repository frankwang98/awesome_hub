#!/usr/bin/env node
/**
 * 校验 Awesome Hub 知识库的 Markdown 内部链接与侧边栏导航是否有效。
 * 检查点：
 *   1. 所有相对链接指向的文件必须存在
 *   2. 侧边栏 _sidebar.md 引用的所有页面必须存在
 *   3. 锚点链接（#...）跳转的目标文件必须存在
 *
 * 会跳过：代码块（``` 包裹）、行内代码（`包裹）、外链（http/ftp/mailto）、纯锚点。
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const failures = [];

/** 移除代码块与行内代码，避免把 C++ lambda 捕获 [x](参数) 误判为链接 */
function stripCode(content) {
  // 去掉行内代码 `...`
  let s = content.replace(/`[^`]*`/g, '');
  // 去掉多行代码块 ``` ... ```
  s = s.replace(/```[\s\S]*?```/g, '');
  return s;
}

function resolveTarget(fromFile, rawTarget) {
  const target = rawTarget.split('#')[0].trim();
  if (!target) return null;          // 纯锚点，跳过
  if (/^(https?:|ftp:|mailto:)/.test(target)) return null; // 外链，跳过
  if (target.startsWith('/')) {      // 根相对路径
    return path.join(ROOT, target);
  }
  return path.resolve(path.dirname(fromFile), target);
}

function checkFile(file) {
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) {
    failures.push(`[缺失文件] ${file}`);
    return;
  }
  const content = stripCode(fs.readFileSync(fullPath, 'utf-8'));
  const mdLinkRe = /\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  while ((m = mdLinkRe.exec(content)) !== null) {
    const target = resolveTarget(fullPath, m[1]);
    if (target && !fs.existsSync(target)) {
      failures.push(`[无效链接] ${file} -> ${m[1]}`);
    }
  }
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, out);
    } else if (entry.endsWith('.md')) {
      out.push(path.relative(ROOT, full));
    }
  }
  return out;
}

const allMd = walk(ROOT).filter(f => !f.startsWith('node_modules') && !f.startsWith('site'));
for (const f of allMd) checkFile(f);

// 校验侧边栏引用的页面是否存在
const sidebar = path.join(ROOT, '_sidebar.md');
if (fs.existsSync(sidebar)) {
  const content = stripCode(fs.readFileSync(sidebar, 'utf-8'));
  const mdLinkRe = /\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  while ((m = mdLinkRe.exec(content)) !== null) {
    const target = resolveTarget(sidebar, m[1]);
    if (target && !fs.existsSync(target)) {
      failures.push(`[侧边栏无效链接] _sidebar.md -> ${m[1]}`);
    }
  }
}

if (failures.length > 0) {
  console.error('❌ 链接校验失败：');
  failures.forEach(f => console.error('   ' + f));
  process.exit(1);
} else {
  console.log(`✅ 链接校验通过（共检查 ${allMd.length} 个 Markdown 文件，无失效内部链接）`);
}
