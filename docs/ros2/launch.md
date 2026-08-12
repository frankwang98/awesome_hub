# Launch 启动文件

**Launch** 文件用于**一次性启动多个节点**、传递参数、设置命名空间，支持 Python 编写（`launch` 系统）。

## 基本 Launch 文件（Python）

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='turtlesim',
            executable='turtlesim_node',
            name='turtlesim',
            output='screen'
        ),
        Node(
            package='turtlesim',
            executable='turtle_teleop_key',
            name='teleop',
            prefix='xterm -e'   # 在独立终端运行
        ),
    ])
```

## 启动命令

```bash
# 运行 launch 文件
ros2 launch my_pkg my_launch.py

# 传递 launch 参数
ros2 launch my_pkg my_launch.py use_sim_time:=true
```

## 常用 Node 参数

```python
Node(
    package='pkg_name',
    executable='node_name',
    name='custom_node_name',        # 重命名节点
    namespace='robot1',             # 命名空间
    parameters=['params.yaml'],     # 参数文件
    remappings=[('old_topic', 'new_topic')],  # 话题重映射
    arguments=['--ros-args'],       # 额外参数
    output='screen',                # 输出到终端
    prefix='gdb -x gdb.txt',        # 调试前缀
)
```

## 传递参数

```python
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration

def generate_launch_description():
    return LaunchDescription([
        # 声明 launch 参数
        DeclareLaunchArgument(
            'use_sim_time',
            default_value='false',
            description='是否使用仿真时间'
        ),
        Node(
            package='my_pkg',
            executable='my_node',
            parameters=[{
                'use_sim_time': LaunchConfiguration('use_sim_time'),
            }],
        ),
    ])
```

## 条件与动作

```python
from launch.actions import IncludeLaunchDescription, LogInfo
from launch.conditions import IfCondition, UnlessCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource

# 引入另一个 launch 文件
IncludeLaunchDescription(
    PythonLaunchDescriptionSource('path/to/other_launch.py')
)

# 条件执行
LogInfo(
    condition=IfCondition(LaunchConfiguration('verbose')),
    message='Verbose mode on'
)
```

## 启动 Gazebo + 机器人

```python
from launch import LaunchDescription
from launch.actions import ExecuteProcess, IncludeLaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        # 启动 Gazebo
        IncludeLaunchDescription(
            PythonLaunchDescriptionSource(
                'package://gazebo_ros/launch/gazebo.launch.py'
            )
        ),
        # 启动机器人状态发布
        Node(
            package='robot_state_publisher',
            executable='robot_state_publisher',
            parameters=[{'robot_description': robot_description}],
        ),
        # 将机器人放入仿真
        Node(
            package='gazebo_ros',
            executable='spawn_entity.py',
            arguments=['-topic', 'robot_description', '-entity', 'my_robot'],
        ),
    ])
```

## 常见工具

```bash
# 查看 launch 文件信息
ros2 launch --show-args my_pkg my_launch.py   # 显示可用参数

# 查看正在运行的节点
ros2 node list
```

## Launch 编写要点

1. 文件以 `.py` 结尾，放在包的 `launch/` 目录
2. `generate_launch_description()` 返回 `LaunchDescription`
3. 用 `Node` 声明要启动的节点，用 `IncludeLaunchDescription` 嵌套其他 launch
4. 用 `DeclareLaunchArgument` 定义可配置参数
5. 可在 CMakeLists.txt 中 `install(DIRECTORY launch DESTINATION share/${PROJECT_NAME}/)`

---

上一章：[URDF 与建模](urdf.md) · 下一章：[ROS1 vs ROS2 →](ros1-vs-ros2.md)
