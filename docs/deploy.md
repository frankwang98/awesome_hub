# 🌍 网页端部署

本知识库基于 **docsify** 构建，是**纯静态站点**，可以部署到任意静态托管平台。以下提供几种常用的部署方式。

## 站点结构

```text
.
├── index.html        # 站点入口（docsify 主页面）
├── _sidebar.md       # 左侧导航
├── _404.md           # 404 页面
├── _media/           # 静态资源（图标等）
├── README.md         # 首页
├── about.md          # 关于
├── awesome.md        # 仓库收藏
├── apps.md           # 工具收藏
├── apps/             # 语文与英语互动练习
└── docs/             # 技术工程与通识教育文档
```

> docsify 无需构建，把整个仓库文件直接上传即可作为站点运行。

---

## 方式一：GitHub Pages（推荐，免费）

1. 将本仓库推送到 GitHub。
2. 进入仓库 **Settings → Pages**。
3. **Source** 选择 `GitHub Actions`，使用仓库已有的 `.github/workflows/static.yml`。
4. 推送到 `main` 或手动触发工作流，部署成功后即可通过 `https://<你的用户名>.github.io/awesome_hub/` 访问。

> 工作流直接上传仓库静态文件，无需编译。

## 方式二：Cloudflare Pages（免费）

1. 登录 [Cloudflare Pages](https://pages.cloudflare.com/)。
2. 点击 **Create a project**，连接本仓库。
3. **Build command** 留空，**Build output directory** 填 `/`（仓库根目录）。
4. 每次 push 自动部署。

## 方式三：Vercel（免费）

1. 登录 [Vercel](https://vercel.com/) → **New Project** → 导入本仓库。
2. **Framework Preset** 选择 `Other`，Build Command 留空，Output Directory 留空。
3. 自动获取域名并部署。

## 方式四：对象存储 / CDN（腾讯云 COS / 阿里云 OSS）

1. 将站点文件（包括 `docs/`、`apps/` 和 `.nojekyll`）上传到 COS/OSS 桶。
2. 开启**静态网站托管**功能，绑定域名即可。

---

## 部署清单

- [x] 当前站点与导航配置使用 `/awesome_hub/`；变更部署路径时需同步调整
- [x] `_sidebar.md`、`_404.md`、`_media/` 齐全
- [x] 内置搜索、代码高亮（C++/Bash/YAML/Python）
- [x] 链接校验脚本 `.ci/check_links.js`（可手动执行 `node .ci/check_links.js`）

---

[← 返回首页](../README.md)
