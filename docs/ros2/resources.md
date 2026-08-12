# 学习资源导航

## 📖 官方文档

| 资源 | 说明 |
| --- | --- |
| [ROS2 官方文档](https://docs.ros.org/en/rolling/index.html) | 权威参考，含安装、教程、API |
| [ROS2 官方教程](https://docs.ros.org/en/rolling/Tutorials.html) | 从入门到进阶的完整教程 |
| [design.ros2.org](https://design.ros2.org/) | ROS2 设计文档，理解架构原理 |
| [ROS 中文社区 wiki](http://wiki.ros.org/) | 中文资料与社区经验 |

## 🎓 学习路线

1. **安装与环境**：选择 LTS 版本（Humble 等）
2. **核心概念**：节点、话题、服务、动作、参数
3. **编程实践**：C++（rclcpp）与 Python（rclpy）
4. **工具链**：colcon、rqt、rviz2、tf2
5. **仿真**：Gazebo、URDF、Nav2、MoveIt
6. **实战项目**：小型机器人导航、机械臂控制

## 🎥 视频教程

- [Bilibili 古月居 ROS2 教程](https://www.bilibili.com/) — 中文最系统的 ROS2 入门
- [The Construct](https://app.theconstructsim.com/) — 在线 ROS2 课程与仿真环境
- [ROS 2 Basics in 5 Days (C++)](https://app.theconstructsim.com/) — 英文付费精品课

## 🔧 核心工具链

| 工具 | 用途 |
| --- | --- |
| `colcon` | 工作空间构建 |
| `rviz2` | 数据与机器人可视化 |
| `rqt` | 图形化调试面板 |
| `tf2` | 坐标变换 |
| `Gazebo` | 3D 物理仿真 |
| `Nav2` | 导航框架（定位、路径规划） |
| `MoveIt` | 机械臂运动规划 |
| `ros2 bag` | 数据录制与回放 |
| `rosbridge` | Web 端通信（配合 WebSocket） |

## 🚀 推荐开源项目

| 项目 | 说明 |
| --- | --- |
| [ros2/examples](https://github.com/ros2/examples) | ROS2 官方示例代码 |
| [ros2/ros2](https://github.com/ros2/ros2) | ROS2 主仓库 |
| [Navigation2](https://github.com/ros-navigation/navigation2) | 机器人导航栈 |
| [moveit2](https://github.com/moveit/moveit2) | 机械臂运动规划 |
| [TurtleBot3](https://github.com/ROBOTIS-GIT/turtlebot3) | 入门级移动机器人平台 |
| [turtlebot3_simulations](https://github.com/ROBOTIS-GIT/turtlebot3_simulations) | TurtleBot3 仿真 |

## 🌐 社区与论坛

- [ROS 官方论坛](https://discourse.ros.org/) — 英文问答与讨论
- [ROS Answers](https://answers.ros.org/) — 历史问题库
- [CSDN ROS2 专栏](https://blog.csdn.net/) — 中文博客教程
- [知乎 ROS2 话题](https://www.zhihu.com/) — 中文经验分享

## 📌 实战项目建议

1. **话题通信**：编写 talker/listener，理解节点通信
2. **小车仿真**：用 URDF 建模 + Gazebo 仿真 + 键盘遥控
3. **SLAM 建图**：使用 Nav2 实现建图与自主导航
4. **机械臂控制**：结合 MoveIt 实现抓取规划
5. **ROS2 网页端**：用 rosbridge_suite + WebSocket 在浏览器监控机器人

---

[← 返回 ROS/ROS2 知识库首页](README.md)
