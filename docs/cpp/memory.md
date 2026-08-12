# 内存与指针

## 指针与引用

```cpp
int x = 42;
int* p = &x;      // 指针：存储地址
int& r = x;       // 引用：x 的别名

// 解引用
*p = 100;         // 通过指针修改 x
r = 200;          // 通过引用修改 x

// nullptr 空指针
int* q = nullptr;
if (q != nullptr) {
    // ...
}
```

| 特性 | 指针 | 引用 |
| --- | --- | --- |
| 可重新赋值 | ✅ 可以 | ❌ 不可（绑定后固定） |
| 可为空 | ✅ 可以 | ❌ 必须初始化 |
| 语法 | `*p` 解引用 | 直接使用 |
| 适用 | 可选参数、动态分配 | 函数参数避免拷贝 |

## 动态内存

```cpp
// 传统方式（需手动释放）
int* arr = new int[10];
delete[] arr;

// 单个对象
Foo* foo = new Foo();
delete foo;
```

> ⚠️ 使用 `new`/`delete` 易导致**内存泄漏**或**悬垂指针**，现代 C++ 推荐使用**智能指针**。

## 智能指针（C++11 起）

| 类型 | 特点 | 使用场景 |
| --- | --- | --- |
| `std::unique_ptr<T>` | 独占所有权，不可拷贝 | 大多数动态对象的默认选择 |
| `std::shared_ptr<T>` | 共享所有权，引用计数 | 多处共享同一对象 |
| `std::weak_ptr<T>` | 弱引用，不增加计数，防循环引用 | 打破 shared_ptr 循环引用 |

```cpp
#include <memory>

// unique_ptr
std::unique_ptr<int> u = std::make_unique<int>(42);
// 所有权转移（移动）
std::unique_ptr<int> u2 = std::move(u);

// shared_ptr
std::shared_ptr<int> s1 = std::make_shared<int>(100);
std::shared_ptr<int> s2 = s1;   // 计数 +1
// 引用计数归零时自动释放

// weak_ptr
std::weak_ptr<int> w = s1;
if (auto sp = w.lock()) {       // 提升为 shared_ptr
    // 安全访问
}
```

## RAII（资源获取即初始化）

**核心思想**：资源（内存、文件、锁）在构造函数中获取，在析构函数中释放。利用对象生命周期自动管理资源。

```cpp
#include <fstream>

void process() {
    std::ofstream file("log.txt");   // RAII：自动打开
    file << "hello" << std::endl;
    // 函数结束，file 析构时自动关闭文件
}

// 互斥锁的 RAII
std::mutex mtx;
{
    std::lock_guard<std::mutex> lock(mtx);  // 自动加锁
    // 临界区
}  // 作用域结束自动解锁
```

## 内存布局（典型）

| 区段 | 内容 |
| --- | --- |
| 代码段 | 程序指令（只读） |
| 数据段 | 全局变量、静态变量 |
| 堆（heap） | `new` 动态分配，向上增长 |
| 栈（stack） | 局部变量、函数调用，向下增长 |

## 常见内存问题

| 问题 | 说明 | 解决 |
| --- | --- | --- |
| 内存泄漏 | 分配后未释放 | 使用智能指针 / RAII |
| 悬垂指针 | 指向已释放的内存 | 置空、避免双重释放 |
| 空指针解引用 | 访问 `nullptr` | 先判空 |
| 越界访问 | 数组下标越界 | 使用 `vector` 并检查 `size()` |
| 重复释放 | 两次 `delete` | 使用 `unique_ptr` |

## 数组与指针的关系

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int* p = arr;        // 数组名退化为首元素指针
p[2] == *(p + 2);    // true，下标访问等价于指针运算
int size = sizeof(arr) / sizeof(arr[0]);  // 5
```

---

上一章：[面向对象编程](oop.md) · 下一章：[STL 标准库 →](stl.md)
