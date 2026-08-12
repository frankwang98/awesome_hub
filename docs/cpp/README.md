# 🚀 C++ 知识库

> C++ 是一种高性能、多范式的系统编程语言。本知识库系统整理 C++ 的**语法速查、面向对象、内存管理、STL、现代 C++ 特性、编译工具链与并发编程**等知识，并附精选学习资源。

## 章节导航

| 章节 | 内容 |
| --- | --- |
| [基础语法速查](basics.md) | 变量、类型、控制流、函数、命名空间、输入输出 |
| [面向对象编程](oop.md) | 类与对象、封装、继承、多态、虚函数 |
| [内存与指针](memory.md) | 指针、引用、动态内存、智能指针、RAII |
| [STL 标准库](stl.md) | 容器、迭代器、算法、函数对象、泛型编程 |
| [现代 C++（11/14/17/20）](modern.md) | auto、lambda、移动语义、智能指针、并发、模板进阶 |
| [编译与构建工具](toolchain.md) | 编译流程、g++/clang、CMake、Makefile、包管理 |
| [并发与多线程](concurrency.md) | 线程、互斥锁、条件变量、原子操作、异步 |
| [精选书单与资源](resources.md) | 经典书籍、在线教程、开源项目 |

---

## 学习路线（建议顺序）

```mermaid
graph LR
  A[基础语法] --> B[面向对象]
  B --> C[内存与指针]
  C --> D[STL 标准库]
  D --> E[现代 C++ 特性]
  E --> F[编译与构建工具]
  F --> G[并发编程]
  G --> H[项目实战]
```

### 第一阶段：基础语法
- 变量、基本类型、运算符、控制流（`if` / `for` / `while` / `switch`）
- 函数、参数传递、函数重载、命名空间
- 输入输出（`std::cin` / `std::cout`）

### 第二阶段：面向对象
- 类与对象、访问控制（`public` / `private` / `protected`）
- 构造函数与析构函数、拷贝控制
- 继承、多态、虚函数、抽象类

### 第三阶段：内存与指针
- 指针与引用、数组、动态内存（`new` / `delete`）
- 内存布局、悬垂指针、内存泄漏
- 智能指针（`unique_ptr` / `shared_ptr` / `weak_ptr`）与 RAII

### 第四阶段：STL 与泛型
- 容器：`vector` / `list` / `map` / `unordered_map` / `set`
- 迭代器与算法、函数对象 / Lambda
- 模板基础与泛型编程思想

### 第五阶段：现代 C++
- `auto`、`nullptr`、范围 for、`constexpr`
- 移动语义与右值引用、完美转发
- Lambda 表达式、智能指针、`std::thread` / `std::async`
- C++17 结构化绑定、`std::optional`、`std::variant`
- C++20 概念（concepts）、协程（coroutines）、范围（ranges）

### 第六阶段：工具链与实战
- 编译流程（预处理→编译→汇编→链接）
- CMake / Makefile 工程管理
- 用 C++ 完成一个实际项目（如计算器、图形库、机器人控制模块）

---

## 速查表（常用关键字）

| 类别 | 关键字 |
| --- | --- |
| 类型 | `int` `double` `char` `bool` `auto` `const` `void` |
| 控制 | `if` `else` `for` `while` `switch` `break` `continue` `return` |
| 面向对象 | `class` `struct` `public` `private` `protected` `virtual` `override` `this` |
| 内存 | `new` `delete` `&` `*` `->` `nullptr` |
| 命名 | `namespace` `using` |
| 现代 | `auto` `decltype` `constexpr` `static_assert` `template` `lambda` |

---

继续阅读 [基础语法速查 →](basics.md)
