# ROS2 核心概念

## 节点（Node）

节点是 ROS2 中**最小的计算单元**，一个机器人程序通常由多个节点组成。

```bash
# 查看所有节点
ros2 node list

# 查看节点信息
ros2 node info /talker

# 运行一个节点
ros2 run <package> <executable>
```

## 通信机制总览

| 机制 | 方向 | 特点 | 适用场景 |
| --- | --- | --- | --- |
| **话题（Topic）** | 单向，发布/订阅 | 持续数据流，异步 | 传感器数据、状态广播 |
| **服务（Service）** | 双向，请求/响应 | 一次性调用，同步 | 查询、配置、触发动作 |
| **动作（Action）** | 双向 + 反馈 | 长时任务，可取消 | 导航、机械臂运动 |
| **参数（Parameter）** | 节点配置 | 可动态修改 | 配置项、调参 |

## 话题（Topic）

基于**发布/订阅**模型，发布者持续发送消息，订阅者接收。

```bash
# 列出话题
ros2 topic list

# 查看话题类型
ros2 topic type /chatter

# 监听话题消息
ros2 topic echo /chatter

# 查看话题信息
ros2 topic info /chatter
```

### 消息类型

```text
/geometry_msgs/msg/Twist        # 速度（线速度+角速度）
/sensor_msgs/msg/Image          # 图像
/sensor_msgs/msg/LaserScan      # 激光雷达数据
/std_msgs/msg/String            # 字符串
```

## 服务（Service）

基于**请求/响应**模型。

```bash
# 列出服务
ros2 service list

# 查看服务类型
ros2 service type /spawn

# 调用服务
ros2 service call /spawn turtlesim/srv/Spawn "{x: 2.0, y: 2.0}"
```

## 动作（Action）

用于**长时任务**，支持目标反馈与取消。

```bash
# 列出动作
ros2 action list

# 查看动作信息
ros2 action info /turtle1/rotate_absolute
```

## 参数（Parameter）

节点配置项，可动态读取与修改。

```bash
# 列出参数
ros2 param list /turtlesim

# 读取参数
ros2 param get /turtlesim background_r

# 设置参数
ros2 param set /turtlesim background_r 150

# 转储/加载参数
ros2 param dump /turtlesim
ros2 param load /turtlesim params.yaml
```

## 命名空间与 remapping

```bash
# 命名空间隔离同名节点
ros2 run turtlesim turtlesim_node --ros-args -r __ns:=/robot1

# remap 话题名
ros2 run turtlesim turtle_teleop_key --ros-args --remap turtle1/cmd_vel:=cmd_vel
```

## 工具可视化

```bash
# 图形化查看节点通信
rqt_graph

# 综合调试工具
rqt

# 可视化工具
rviz2
```

## 节点生命周期与组合

- **Composition**：多个节点可在同一进程内组合运行，降低通信开销
- **`ros2 component`** 命令管理组合节点

---

上一章：[ROS/ROS2 概览](README.md) · 下一章：[工作空间与构建 →](workspace.md)
