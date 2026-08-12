# 编译与构建工具

## 编译流程

```mermaid
graph LR
  A[源代码 .cpp] --> B[预处理]
  B --> C[编译]
  C --> D[汇编]
  D --> E[链接]
  E --> F[可执行文件]
```

1. **预处理**：处理 `#include`、`#define`、`#ifdef` 等指令
2. **编译**：将源码转为汇编代码
3. **汇编**：将汇编转为机器码（目标文件 `.o` / `.obj`）
4. **链接**：将多个目标文件与库合并为可执行文件

## 常用编译器

| 编译器 | 说明 |
| --- | --- |
| `g++` | GCC 的 C++ 编译器，Linux 主流 |
| `clang++` | LLVM 的 C++ 编译器，macOS 默认，报错信息友好 |
| MSVC | 微软 Visual Studio 编译器，Windows 主流 |

### g++ 基本用法

```bash
# 编译单个文件
g++ hello.cpp -o hello

# 多文件编译
g++ main.cpp utils.cpp -o app

# 启用 C++17 标准
g++ -std=c++17 main.cpp -o app

# 优化与调试
g++ -O2 main.cpp -o app      # 优化
g++ -g main.cpp -o app       # 生成调试信息
g++ -Wall -Wextra main.cpp   # 开启警告

# 链接第三方库（如 pthread）
g++ main.cpp -lpthread -o app
```

## CMake 构建系统

CMake 是跨平台、最流行的 C++ 构建工具。

### 基本 CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.16)
project(MyApp)

# 指定 C++ 标准
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 添加可执行文件
add_executable(myapp main.cpp utils.cpp)

# 添加静态库 / 动态库
add_library(mylib STATIC lib.cpp)
add_library(myshared SHARED shared.cpp)

# 链接库
target_link_libraries(myapp PRIVATE mylib)
```

### 构建流程

```bash
# 1. 配置（生成构建文件）
mkdir build && cd build
cmake ..

# 2. 构建
cmake --build .

# 3. 运行
./myapp
```

### 常用 CMake 命令

```bash
cmake -DCMAKE_BUILD_TYPE=Release ..   # 配置为 Release
cmake --build . --target install      # 安装
cmake --build . -j$(nproc)            # 并行编译
```

## Makefile 基础

```makefile
CXX = g++
CXXFLAGS = -std=c++17 -Wall

all: app

app: main.o utils.o
	$(CXX) $(CXXFLAGS) -o app main.o utils.o

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f *.o app

.PHONY: all clean
```

## 头文件与库管理

### 头文件搜索路径

```bash
# 指定头文件目录
g++ -I./include main.cpp -o app

# 指定库文件目录并链接
g++ -L./lib -lmylib main.cpp -o app
```

### `#pragma once` vs include guards

```cpp
// 方式一：#pragma once（推荐，简洁）
#pragma once

// 方式二：include guards（标准）
#ifndef MY_HEADER_H
#define MY_HEADER_H
// ...
#endif
```

## 包管理器

| 工具 | 平台 | 说明 |
| --- | --- | --- |
| `vcpkg` | 跨平台 | Microsoft 出品，集成 CMake |
| `Conan` | 跨平台 | 去中心化 C/C++ 包管理器 |
| `apt` | Ubuntu | `apt install libxxx-dev` |
| `brew` | macOS | `brew install xxx` |

---

上一章：[现代 C++（11/14/17/20）](modern.md) · 下一章：[并发与多线程 →](concurrency.md)
