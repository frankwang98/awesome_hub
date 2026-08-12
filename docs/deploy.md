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
└── docs/             # 知识库文档（C++ / ROS2）
```

> docsify 无需构建，把整个仓库文件直接上传即可作为站点运行。

---

## 方式一：GitHub Pages（推荐，免费）

1. 将本仓库推送到 GitHub。
2. 进入仓库 **Settings → Pages**。
3. **Source** 选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/ (root)`。
4. 保存后即可通过 `https://<你的用户名>.github.io/awesome_hub/` 访问。

> 💡 docsify 官方推荐用此方式，无需编译、秒级发布。

## 方式二：Cloudflare Pages（免费）

1. 登录 [Cloudflare Pages](https://pages.cloudflare.com/)。
2. 点击 **Create a project**，连接本仓库。
3. **Build command** 留空，**Build output directory** 填 `/`（仓库根目录）。
4. 每次 push 自动部署。

## 方式三：Vercel（免费）

1. 登录 [Vercel](https://vercel.com/) → **New Project** → 导入本仓库。
2. **Framework Preset** 选择 `Other`，Build Command 留空，Output Directory 留空。
3. 自动获取域名并部署。

## 方式四：CNB 流水线自动打包（本项目已配置）

项目已内置 `.cnb.yml` 流水线，可在 CNB 页面**手动触发**，将静态站点打包为 `site.tar.gz` 制品，方便推送到任意对象存储或 CDN：

```yaml
# 已在 .cnb.yml 中配置 web_trigger 事件
# 在 CNB 仓库页面 -> 流水线 -> 手动触发 -> "package-site"
```

触发后生成的 `site.tar.gz` 即为可发布的静态站点压缩包。

## 方式五：对象存储 / CDN（腾讯云 COS / 阿里云 OSS）

1. 将 `site/` 目录（或 `site.tar.gz` 解压后）上传到 COS/OSS 桶。
2. 开启**静态网站托管**功能，绑定域名即可。

---

## 部署清单

- [x] `index.html` 使用相对路径，可部署在子目录
- [x] `_sidebar.md`、`_404.md`、`_media/` 齐全
- [x] 内置搜索、代码高亮（C++/Bash/YAML/Python）
- [x] 链接校验脚本 `.ci/check_links.js`（CI 自动运行）

---

[← 返回首页](/)
