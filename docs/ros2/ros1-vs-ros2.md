# ROS1 vs ROS2

ROS2 是 ROS1 的下一代版本，针对实时性、跨平台、安全性等痛点进行了重构。理解两者差异有助于迁移与选型。

## 核心差异对比

| 特性 | ROS1 | ROS2 |
| --- | --- | --- |
| 通信中间件 | 自定义 TCPROS/UDPROS | **DDS**（数据分发服务） |
| 实时性 | 弱 | ✅ 强（支持实时内核） |
| 跨平台 | 以 Linux 为主 | ✅ Linux / Windows / macOS |
| 多机通信 | 需配置 master | ✅ 开箱即用（DDS 自动发现） |
| 安全性 | 弱 | ✅ 内置 DDS 安全（加密/认证） |
| 中心节点 | 需要 `roscore` | ❌ 无中心节点 |
| 构建系统 | catkin | **colcon**（ament） |
| 编程语言 | C++ / Python / Lisp | C++ / Python（官方） |
| 生命周期 | 进程级 | ✅ 节点生命周期管理 |
| 参数系统 | 集中式参数服务器 | 分散式节点参数 |

## 关键差异详解

### 1. 无中心节点（roscore）

```bash
# ROS1：必须启动 roscore
roscore

# ROS2：无需 roscore，直接运行节点
ros2 run demo_nodes_cpp talker
```

### 2. 通信中间件：DDS

- ROS2 基于 DDS 标准，通过 **QoS** 精确控制通信可靠性、实时性
- 支持**容错**与**动态发现**，多机部署更简单

### 3. 构建工具

```bash
# ROS1
catkin_make
catkin build

# ROS2
colcon build
```

### 4. 命令差异对照

| 操作 | ROS1 | ROS2 |
| --- | --- | --- |
| 节点列表 | `rosnode list` | `ros2 node list` |
| 话题列表 | `rostopic list` | `ros2 topic list` |
| 回声话题 | `rostopic echo /chatter` | `ros2 topic echo /chatter` |
| 服务调用 | `rosservice call` | `ros2 service call` |
| 参数 | `rosparam` | `ros2 param` |
| 录制数据 | `rosbag record` | `ros2 bag record` |
| 可视化 | `rqt_graph` / `rviz` | `rqt_graph` / `rviz2` |
| 运行节点 | `rosrun` | `ros2 run` |

### 5. 包类型

```bash
# ROS1
catkin_create_pkg my_pkg roscpp std_msgs

# ROS2
ros2 pkg create my_pkg --build-type ament_cmake --dependencies rclcpp std_msgs
```

## 迁移注意事项

1. **API 差异**：`rospy`/`roscpp` → `rclpy`/`rclcpp`
2. **话题/服务类型**：基本兼容，但需要重新生成消息代码
3. **TF**：`tf` → `tf2`
4. **Launch**：XML/YAML → Python（`launch`）
5. **插件系统**：`pluginlib` 用法有变化
6. **消息录制**：rosbag 格式改为 SQLite3（`ros2 bag`）

## 何时选择 ROS1 vs ROS2

| 场景 | 推荐 |
| --- | --- |
| 新项目、长期维护 | **ROS2**（推荐，官方主推） |
| 已运行的 ROS1 存量项目 | 继续用 ROS1，逐步迁移 |
| 学习现代机器人开发 | **ROS2** |
| 依赖较老的 ROS1 生态包 | 评估兼容性 |

> 💡 ROS1 Noetic 已停止维护，新项目强烈建议直接使用 **ROS2**（如 Humble、Jazzy 等 LTS 版本）。

---

上一章：[Launch 启动文件](launch.md) · 下一章：[学习资源导航 →](resources.md)
