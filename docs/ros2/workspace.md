# 工作空间与构建

## 工作空间结构

ROS2 使用 **colcon** 作为默认构建工具，工作空间（workspace）结构如下：

```text
my_ws/
├── src/            # 源码目录
│   ├── pkg_a/      # 功能包 A
│   ├── pkg_b/      # 功能包 B
│   └── ...
├── build/          # 构建中间文件（自动生成）
├── install/        # 安装产物（自动生成）
└── log/            # 日志（自动生成）
```

## 创建与构建工作空间

```bash
# 创建工作空间
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws

# 构建
colcon build

# 构建单个包
colcon build --packages-select my_pkg

# 并行构建
colcon build --parallel-workers 4

# 配置环境（每次新终端需要）
source install/setup.bash
```

## 创建功能包

### 两种包类型

| 类型 | 语言 | 说明 |
| --- | --- | --- |
| `ament_cmake` | C++ | 基于 CMake |
| `ament_python` | Python | 基于 setuptools |

### 创建 C++ 包

```bash
cd ~/ros2_ws/src
ros2 pkg create my_pkg --build-type ament_cmake --dependencies rclcpp std_msgs
```

### 创建 Python 包

```bash
ros2 pkg create my_py_pkg --build-type ament_python --dependencies rclpy std_msgs
```

## 包结构（ament_cmake）

```text
my_pkg/
├── CMakeLists.txt
├── package.xml
├── include/
│   └── my_pkg/
│       └── node.hpp
└── src/
    └── node.cpp
```

## package.xml 关键字段

```xml
<?xml version="1.0"?>
<package format="3">
  <name>my_pkg</name>
  <version>0.0.0</version>
  <description>示例功能包</description>
  <maintainer email="you@example.com">your_name</maintainer>
  <license>Apache-2.0</license>

  <depend>rclcpp</depend>
  <depend>std_msgs</depend>
</package>
```

## CMakeLists.txt 关键配置

```cmake
cmake_minimum_required(VERSION 3.8)
project(my_pkg)

# 查找依赖
find_package(ament_cmake REQUIRED)
find_package(rclcpp REQUIRED)
find_package(std_msgs REQUIRED)

# 添加可执行文件
add_executable(my_node src/node.cpp)
ament_target_dependencies(my_node rclcpp std_msgs)

# 安装可执行文件
install(TARGETS my_node
  DESTINATION lib/${PROJECT_NAME})

ament_package()
```

## 常用命令

```bash
# 构建
colcon build

# 构建并自动 source
colcon build --symlink-install   # Python 用符号链接，改代码免重编译

# 清理
rm -rf build install log

# 列出已安装包
ros2 pkg list

# 查看包信息
ros2 pkg prefix my_pkg
```

---

上一章：[ROS2 核心概念](concepts.md) · 下一章：[话题 · 服务 · 动作 →](tsa.md)
