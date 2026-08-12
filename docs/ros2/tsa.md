# 话题 · 服务 · 动作

## 三种通信机制对比

| 特性 | 话题 (Topic) | 服务 (Service) | 动作 (Action) |
| --- | --- | --- | --- |
| 通信模式 | 发布/订阅 | 请求/响应 | 目标/反馈/结果 |
| 方向 | 单向持续流 | 双向一次性 | 双向 + 持续反馈 |
| 阻塞 | 异步，不阻塞 | 同步，调用后等待 | 异步，可监听反馈 |
| 是否可取消 | — | — | ✅ 可取消 |
| 适用 | 高频数据流 | 短时请求 | 长时任务 |

## 话题：发布者-订阅者（C++）

```cpp
#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

// 发布者
class Talker : public rclcpp::Node {
public:
    Talker() : Node("talker") {
        pub_ = this->create_publisher<std_msgs::msg::String>("chatter", 10);
        timer_ = this->create_wall_timer(
            std::chrono::seconds(1),
            [this]() {
                auto msg = std_msgs::msg::String();
                msg.data = "Hello, ROS2!";
                pub_->publish(msg);
            });
    }
private:
    rclcpp::Publisher<std_msgs::msg::String>::SharedPtr pub_;
    rclcpp::TimerBase::SharedPtr timer_;
};

int main(int argc, char** argv) {
    rclcpp::init(argc, argv);
    rclcpp::spin(std::make_shared<Talker>());
    rclcpp::shutdown();
    return 0;
}
```

### 订阅者（C++）

```cpp
class Listener : public rclcpp::Node {
public:
    Listener() : Node("listener") {
        sub_ = this->create_subscription<std_msgs::msg::String>(
            "chatter", 10,
            [this](const std_msgs::msg::String::SharedPtr msg) {
                RCLCPP_INFO(this->get_logger(), "收到: %s", msg->data.c_str());
            });
    }
private:
    rclcpp::Subscription<std_msgs::msg::String>::SharedPtr sub_;
};
```

## 服务：服务器-客户端（Python）

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

# 服务器
class AddServer(Node):
    def __init__(self):
        super().__init__('add_server')
        self.srv = self.create_service(
            AddTwoInts, 'add_two_ints', self.add_callback)

    def add_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'收到 {request.a} + {request.b}')
        return response

# 客户端
class AddClient(Node):
    def __init__(self):
        super().__init__('add_client')
        self.cli = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('等待服务...')
        req = AddTwoInts.Request()
        req.a = 3
        req.b = 4
        future = self.cli.call_async(req)
        future.add_done_callback(self.done_callback)

    def done_callback(self, future):
        self.get_logger().info(f'结果: {future.result().sum}')
```

## 动作：Action 服务器

```python
from action_tutorials_interfaces.action import Fibonacci

class FibActionServer(Node):
    def __init__(self):
        super().__init__('fib_action_server')
        self.action_server = self.create_action_server(
            Fibonacci, 'fibonacci', self.execute_callback)

    async def execute_callback(self, goal_handle):
        self.get_logger().info(f'执行目标: {goal_handle.request.order}')
        feedback_msg = Fibonacci.Feedback()
        feedback_msg.sequence = [0, 1]
        for i in range(1, goal_handle.request.order):
            feedback_msg.sequence.append(
                feedback_msg.sequence[i] + feedback_msg.sequence[i-1])
            goal_handle.publish_feedback(feedback_msg)
        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = feedback_msg.sequence
        return result
```

## QoS（服务质量）

控制消息传输的可靠性：

```cpp
// 可靠性：可靠传输 vs 尽力而为
rclcpp::QoS(10).reliable();
rclcpp::QoS(10).best_effort();

// 持久性：是否保留最后一条消息给后加入的订阅者
rclcpp::QoS(10).transient_local();

// 深度：队列长度
rclcpp::QoS(10)
```

> 发布者与订阅者 QoS 不匹配会警告；`best_effort` 常用于图像/雷达等高带宽数据。

## 自定义消息/服务/动作

```text
my_pkg/
└── srv/
    ├── AddTwoInts.srv   # 服务定义
    ├── msg/
    │   └── CustomMsg.msg   # 消息定义
    └── action/
        └── Fibonacci.action  # 动作定义
```

```text
# CustomMsg.msg
int32 id
string name
float64[] data
```

构建后即可 `#include "my_pkg/msg/custom_msg.hpp"` 使用。

---

上一章：[工作空间与构建](workspace.md) · 下一章：[TF 坐标变换 →](tf.md)
