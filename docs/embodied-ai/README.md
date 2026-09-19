# 🧠 具身智能知识库

具身智能（Embodied AI）关注让 AI 在真实或仿真的物理世界中完成“感知 → 理解 → 决策 → 行动 → 反馈”的闭环。它连接了视觉语言模型、机器人学习、运动规划、控制与数据闭环。

## 学习地图

| 模块 | 关注问题 | 入口 |
| --- | --- | --- |
| 基础框架 | 什么是具身智能，系统如何闭环 | [基础与系统框架](foundations.md) |
| 多模态感知 | 如何从图像、点云、语言获得可行动的状态 | [感知与表征](perception.md) |
| VLA | 如何把视觉、语言指令映射为机器人动作 | [Vision-Language-Action](vla.md) |
| 规划控制 | 高层 Agent 如何与运动规划、控制器协作 | [任务规划与控制](planning-control.md) |
| 数据与仿真 | 如何构建训练数据，并跨越 Sim2Real | [仿真、数据与 Sim2Real](simulation-data.md) |
| 落地评测 | 如何上线、评测、安全运行和持续迭代 | [部署与评测](deployment-evaluation.md) |

## 与现有知识库的关系

- [ROS / ROS2](../ros2/README.md)：提供机器人消息、坐标、模型与运行时基础设施。
- [自动驾驶](../autonomous-driving/README.md)：提供感知、规划、控制和工程闭环的垂直领域经验。
- [C++](../cpp/README.md)：为实时系统、性能与工程化实现打基础。

## 推荐学习顺序

1. 先理解 [基础与系统框架](foundations.md)，建立完整闭环。
2. 学习 [感知与表征](perception.md) 与 [VLA](vla.md)，理解多模态到动作的模型范式。
3. 结合 [任务规划与控制](planning-control.md)，把 AI 接入机器人执行栈。
4. 最后通过 [仿真、数据与 Sim2Real](simulation-data.md) 和 [部署与评测](deployment-evaluation.md) 进入落地阶段。
