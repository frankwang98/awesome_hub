# C++ 工程实践与常用库

> 从旧 Wiki 与 `devfrank_cpp` 收敛而来的实践清单。这里保留长期有效的工程模式与选型入口；具体版本、安装命令以各库官方文档为准。

## 一个可维护的 C++ 工程

优先把工程边界搭好，再补功能：

```text
app / node
  ├── domain        业务对象与算法，不依赖 UI 或中间件
  ├── adapters      文件、网络、ROS、数据库等外部接口
  ├── infrastructure 日志、配置、线程、指标
  └── tests         单元测试与集成测试
```

- 用 **CMake** 管理目标、依赖和编译选项；不要把第三方头文件、库目录散落在 IDE 配置中。
- 用 **RAII** 管理文件、锁、线程与连接；资源拥有者应当清晰。
- 把配置放入 YAML/JSON，把运行日志与业务数据分开。
- 从一开始就提供最小可运行示例和测试命令。

## 高频库选型

| 需求 | 优先选择 | 说明 |
| --- | --- | --- |
| 日志 | [spdlog](https://github.com/gabime/spdlog) | 格式化、异步日志、多 sink；适合桌面、机器人和服务端程序。 |
| 配置 | [yaml-cpp](https://github.com/jbeder/yaml-cpp) | 适合参数、场景、任务与设备配置。 |
| 命令行参数 | [CLI11](https://github.com/CLIUtils/CLI11) 或 gflags | 小工具优先 CLI11；已有 Google 体系时可用 gflags。 |
| 测试 | [GoogleTest](https://github.com/google/googletest) | 领域逻辑、规划与控制模块都应可脱离外部依赖测试。 |
| 序列化 / RPC | protobuf、gRPC | 适合稳定接口与跨进程、跨机器通信。 |
| 网络 | Asio / Boost.Asio、cpp-httplib | 前者适合底层异步 IO，后者适合轻量 HTTP。 |
| 数据格式 | nlohmann/json、RapidJSON | 前者易用，后者偏性能与可控性。 |
| 线性代数 / 优化 | Eigen、Ceres、OSQP | 机器人、定位、规划与控制中的常见组合。 |

## 配置与日志最小模式

```cmake
find_package(spdlog CONFIG REQUIRED)
find_package(yaml-cpp CONFIG REQUIRED)

target_link_libraries(app PRIVATE spdlog::spdlog yaml-cpp)
```

```cpp
const auto config = YAML::LoadFile(config_path);
spdlog::info("loading scenario: {}", config["scenario"].as<std::string>());
```

注意：配置读取失败、字段缺失、非法值都应在启动阶段报出明确错误；不要把默认值静默散落在业务代码里。

## 机器人与桌面应用补充

- 点云可视化优先区分 **数据处理（PCL）**、**渲染（VTK / RViz）** 和 **UI（Qt）** 三层，避免将三者耦合在单一窗口类中。
- Qt 工程将 UI、控制器和领域逻辑分离；后者才值得复用到 ROS 节点或服务端。
- 对旧版本 VTK、PCL、Qt 的编译记录保留为历史参考即可，新的项目应锁定版本并用 CMake/包管理器可复现地安装。

## 延伸阅读

- [编译与构建工具](toolchain.md)
- [并发与多线程](concurrency.md)
- [精选书单与资源](resources.md)
- [ROS2 工程实践](../ros2/field-practice.md)
