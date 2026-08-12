# TF 坐标变换

**TF（Transform）** 用于描述机器人各部件之间的坐标变换关系，维护一棵**坐标树**。ROS2 使用 **TF2** 库。

## 核心概念

- **坐标帧（Frame）**：某个坐标系，如 `map`、`odom`、`base_link`、`laser`、`camera`
- **变换（Transform）**：平移 + 旋转，描述两个帧之间的相对关系
- **TF 树**：各帧通过父子关系组成树，任意两帧可通过树计算相对变换

```text
        map
         │
       odom
         │
     base_link
      /      \
   laser    camera
```

## 常见坐标帧

| 帧名 | 含义 |
| --- | --- |
| `map` | 全局地图坐标系（固定） |
| `odom` | 里程计坐标系 |
| `base_link` | 机器人本体坐标系 |
| `base_footprint` | 机器人在地面的投影点 |
| `laser` / `scan` | 激光雷达坐标系 |
| `camera` / `rgb` | 相机坐标系 |

## 常用命令

```bash
# 查看坐标树
ros2 run tf2_tools view_frames
ros2 run tf2_ros tf2_echo base_link laser

# 可视化坐标树
ros2 run tf2_tools view_frames.py
# 生成 frames.pdf 查看
```

## 静态坐标变换

用于固定相对关系（如相机与本体）。

```bash
# 发布静态变换：base_link -> laser
ros2 run tf2_ros static_transform_publisher \
  0.1 0.0 0.2 0.0 0.0 0.0 \
  base_link laser
```

## 广播与监听（C++）

```cpp
#include "tf2_ros/transform_broadcaster.h"
#include "tf2_ros/transform_listener.h"
#include "geometry_msgs/msg/transform_stamped.hpp"

// 广播变换
auto broadcaster = std::make_shared<tf2_ros::TransformBroadcaster>(this);
geometry_msgs::msg::TransformStamped t;
t.header.stamp = this->now();
t.header.frame_id = "base_link";
t.child_frame_id = "laser";
t.transform.translation.x = 0.1;
t.transform.rotation.w = 1.0;
broadcaster->sendTransform(t);

// 监听变换（查询 base_link -> laser）
tf2_ros::Buffer buffer(this->get_clock());
tf2_ros::TransformListener listener(buffer);
auto transform = buffer.lookupTransform(
    "base_link", "laser", tf2::TimePointZero);
```

## Python 版广播与监听

```python
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import TransformStamped
from tf2_ros import TransformBroadcaster, Buffer, TransformListener

class TfNode(Node):
    def __init__(self):
        super().__init__('tf_node')
        # 广播
        self.broadcaster = TransformBroadcaster(self)
        # 监听
        self.buffer = Buffer()
        self.listener = TransformListener(self.buffer, self)

    def publish_transform(self):
        t = TransformStamped()
        t.header.stamp = self.get_clock().now().to_msg()
        t.header.frame_id = 'base_link'
        t.child_frame_id = 'laser'
        t.transform.translation.x = 0.1
        t.transform.rotation.w = 1.0
        self.broadcaster.sendTransform(t)

    def query_transform(self):
        try:
            trans = self.buffer.lookup_transform(
                'base_link', 'laser', rclpy.time.Time())
            return trans
        except Exception as e:
            self.get_logger().warn(f'查询失败: {e}')
```

## TF2 使用要点

1. **必须有共同的根帧**，否则无法计算两帧间变换
2. **时间同步**：查询变换时指定时间戳，避免时序错乱
3. 静态变换用 `static_transform_publisher` 或 `tf2_ros` 静态广播
4. 动态变换（如机器人移动）需持续广播 `odom`/`base_link` 变换
5. 查询失败通常是帧名拼写错误或树不连通

---

上一章：[话题 · 服务 · 动作](tsa.md) · 下一章：[URDF 与建模 →](urdf.md)
