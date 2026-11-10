<div align="center">

# Education Hub

> **Build a structured general education knowledge base for lifelong learning.**  
> **构建一个面向终身学习的结构化通识教育知识库。**

</div>

Education Hub 不是电子教材仓库，也不以覆盖全部课程为目标。它关注的是：哪些知识必须知道、必须理解、值得长期保留，以及如何在离开学校多年后重新建立知识体系。

## 设计目标

1. **重建基础知识体系**：支持成年人从小学、初中到高中的核心概念重新学习。
2. **知识提炼，而非教材搬运**：优先保留知识地图、核心概念、经典内容、易错点与高质量例子。
3. **兼顾知识与经典**：语文保留作品与文学脉络；数学保留概念、定理与方法；科学保留模型、定律与实验。
4. **从基础教育走向通识教育**：小学到高中是起点，长期扩展至人文、社会、法律、经济、艺术与生活。
5. **让学习能够发生**：每个主题最终应支持“知识 → 解释 → 例子 → 练习 → 解析 → 关联知识”的学习闭环。

## 迁移说明

本模块已并入 Awesome Hub，文档、练习应用、题库和许可声明均在本站维护。

## 知识地图

```text
Education Hub
├── Language
│   ├── Chinese      语文、古诗文、阅读、写作与文学
│   └── English      词汇、语法、阅读、写作与表达
├── Mathematics      概念、定理、方法、例题与数学思想
├── Science
│   ├── Physics      现象、模型、定律与实验
│   ├── Chemistry    物质、反应、原理与实验
│   └── Biology      生命、细胞、遗传、进化与生态
├── Humanities
│   ├── History      时间线、人物、事件、制度与文明
│   ├── Geography    地球、气候、地形、人口与区域
│   ├── Literature   文学作品、流派与批评方法
│   └── Philosophy   基础概念、思想传统与思辨方法
├── General Knowledge
│   ├── Economics    经济常识与基本模型
│   ├── Law          法律常识与公民规则
│   ├── Society      社会、媒介与公共议题
│   ├── Art          音乐、美术与审美
│   └── Life         健康、沟通、决策与生活技能
└── Learning
    ├── Learning paths
    ├── Practice
    └── Review methods
```

## 内容模板

每个知识主题优先采用统一结构：

```text
知识地图
↓
核心概念 / 经典内容
↓
解释与例子
↓
练习与解析
↓
关联知识与下一步
```

## Practice Labs · 互动练习场

知识内容和练习界面分开维护：Markdown 负责解释与学习路径，结构化题库负责题目与答案，HTML / JavaScript 负责交互和本地进度。

| 模块 | 当前能力 | 入口 |
| --- | --- | --- |
| English Practice | 核心词汇、语法与造句输出 | [英语互动练习](language/english/practice-lab.md) |
| Chinese Practice | 古诗词复习与关键句默写 | [语文互动练习](language/chinese/practice-lab.md) |

详细模板见 [知识条目模板](templates/knowledge-note.md)。

内容状态、来源和复核方式见[内容维护与可信度](maintenance.md)。

仓库下一步优先级见[建设路线](project-roadmap.md)。

## 使用与贡献

- 当前仓库先搭建知识地图与学习路径，再逐步填充真正长期有效的内容。
- 不直接搬运教材、试卷或受版权保护的长篇材料；以自己的解释、链接、短引文和原创练习为主。
- 涉及事实、法律、健康、时效性资料时，注明来源与最后复核日期。

具体写作规范见 [CONTRIBUTING.md](CONTRIBUTING.md)。
