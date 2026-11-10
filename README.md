<div align="center">

# Awesome Hub 🌟

> **技术工程与通识教育知识库** —— 系统沉淀技术实践、基础知识与理解世界的方法。

![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@main/media/badge.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
![docsify](https://img.shields.io/badge/docsify-4.x-blue.svg)

</div>

欢迎来到 **Awesome Hub**！这里是一个持续维护的**技术工程与通识教育知识库**：把学习笔记、工程经验、旧 Wiki / CSDN 文章和项目实践，逐步整理成可检索、可验证、可更新的知识体系。

🔗 [在线阅读 Awesome Hub](https://frankwang98.asia/awesome_hub/)　| 🌐 [我的个人网站](https://frankwang98.asia/)

> 💡 本站为**纯静态网页**，基于 docsify 构建，左侧侧边栏浏览分类、顶部搜索框全局检索。

---

## 🧭 快速导航

| 分类 | 说明 |
| --- | --- |
| [📚 通识教育](docs/education/README.md) | 语言、数学、科学、人文、经济、法律、艺术与学习方法 |
| [✍️ 互动练习](docs/education/language/english/practice-lab.md) | 英语词汇、语法与造句；[语文古诗词复习](docs/education/language/chinese/practice-lab.md) |
| [🚀 C++ 知识库](docs/cpp/README.md) | 基础语法、面向对象、内存、STL、现代 C++、编译工具链、并发、书单资源 |
| [🤖 ROS / ROS2 知识库](docs/ros2/README.md) | 架构与核心概念、工作空间、话题/服务/动作、TF、URDF、Launch、ROS1 对比、资源 |
| [🚗 自动驾驶知识库](docs/autonomous-driving/README.md) | 规划控制（搜索/轨迹/控制）、工程实践、感知流程概览、端到端概览 |
| [🧠 具身智能知识库](docs/embodied-ai/README.md) | VLA、世界模型、机器人学习、仿真与 Sim2Real、实机部署 |
| [🗃️ 历史文章归档](docs/legacy/README.md) | 旧 Wiki 与 CSDN 文章原文，保留历史经验并逐步复核迁移 |
| [🔖 精选 GitHub 仓库](awesome.md) | 各类有趣、好用的开源仓库收藏 |
| [📱 工具与 App](apps.md) | 效率工具、开发工具与网页工具 |
| [🌍 网页端部署](docs/deploy.md) | 一键发布为在线站点的部署指南 |
| [📖 关于本 Hub](about.md) | Hub 定位、规划方向与贡献方式 |
| [🔄 内容维护规范](docs/maintenance.md) | 时效状态、版本信息、来源和复核流程 |

---

## 📂 目录结构

```text
awesome_hub/
├── README.md                 # 统一站点首页
├── _sidebar.md               # 技术与通识导航
├── index.html                # Docsify 入口
├── docs/
│   ├── cpp/                  # C++
│   ├── ros2/                 # ROS / ROS2
│   ├── autonomous-driving/   # 自动驾驶
│   ├── embodied-ai/          # 具身智能
│   ├── legacy/               # 历史文章
│   └── education/            # 原 Education Hub 通识内容
│       ├── language/         # 语文与英语
│       ├── mathematics/      # 数学
│       ├── science/          # 科学
│       ├── humanities/       # 人文
│       ├── general/          # 经济、法律、社会、艺术与生活
│       ├── learning/         # 学习方法
│       └── templates/        # 知识条目模板
└── apps/
    ├── chinese/              # 古诗词复习与默写
    └── english/              # 词汇、语法、造句与 Basic 850
```

Education Hub 已作为通识教育板块并入本站，文档、练习应用、题库与来源说明均在本仓库维护。

## 🌱 规划中的知识方向

- Python / 算法与数据结构
- Linux 与 Shell
- 嵌入式与机器人学
- 深度学习与 AI 应用
- 具身智能与机器人基础模型
- 工程实践（CMake、Git、CI/CD）

## 🔄 内容状态

- **主线内容**：已经整理进当前知识体系，持续更新。
- **待复核内容**：知识仍有价值，但版本、命令或链接需要重新验证。
- **历史归档**：完整保留旧 Wiki / CSDN 原文，避免知识和写作历史丢失。

具体约定见 [内容维护规范](docs/maintenance.md)。

---

## 🤝 如何贡献

1. **Fork** 本仓库并创建新分支
2. 在对应分类下补充或修正知识点，格式保持 Markdown 规范
3. 提交 **PR**，或直接提 **Issue** 推荐你希望收录的主题 🎉

详细的规范请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 📄 License

[Apache 2.0](LICENSE)；迁入的通识文档及练习应用保留 [MIT 许可](docs/education/LICENSE)，题库等资源遵循随附的许可声明。
