# 现代 C++（11/14/17/20）

现代 C++（C++11 及其后续版本）引入了大量新特性，让代码更安全、更简洁、更高效。

## C++11 核心特性

### auto 自动类型推导

```cpp
auto x = 42;              // int
auto pi = 3.14159;        // double
auto it = v.begin();      // 迭代器
const auto& ref = vec[0]; // 常引用
```

### nullptr

```cpp
// 旧式：int* p = NULL;  // 有歧义
int* p = nullptr;         // 类型安全的空指针
```

### 范围 for

```cpp
for (const auto& item : container) {
    // ...
}
```

### Lambda 表达式

```cpp
auto add = [](int a, int b) { return a + b; };
int result = add(3, 4);   // 7
```

### 移动语义与右值引用

```cpp
// 右值引用 `&&`，用于实现移动语义
std::string a = "hello";
std::string b = std::move(a);   // 转移资源，a 不再持有数据
```

移动语义避免深拷贝，显著提升性能（尤其是容器、字符串）。

### 智能指针

- `std::unique_ptr`、`std::shared_ptr`、`std::weak_ptr`（详见[内存与指针](memory.md)）

### `constexpr`

```cpp
constexpr int square(int x) { return x * x; }  // 编译期计算
constexpr int val = square(5);                  // 编译期常量
```

### 委托构造函数 / 继承构造函数

```cpp
class Base {
public:
    Base(int x) : x_(x) {}
    int x_;
};

class Derived : public Base {
public:
    using Base::Base;          // 继承基类构造函数
};
```

## C++14 新特性

- **泛型 Lambda**：`auto` 参数
- **`decltype(auto)`**：推导精确类型
- **`std::make_unique`**（在 14 中引入，11 有 make_shared）
- **变量模板**

```cpp
auto add = [](auto a, auto b) { return a + b; };  // 泛型 lambda
int r1 = add(1, 2);
double r2 = add(1.5, 2.5);
```

## C++17 新特性

### 结构化绑定

```cpp
std::map<std::string, int> m = {{"a", 1}, {"b", 2}};
for (const auto& [key, value] : m) {
    std::cout << key << "=" << value << std::endl;
}
```

### `std::optional`

```cpp
#include <optional>
std::optional<int> find(int key) {
    if (key > 0) return key;
    return std::nullopt;   // 无值
}
if (auto v = find(5)) {
    std::cout << *v;
}
```

### `std::variant`

```cpp
#include <variant>
std::variant<int, double, std::string> v;
v = 42;
v = "hello";                // 可保存多种类型之一
```

### `if` / `switch` 初始化

```cpp
if (auto it = m.find("key"); it != m.end()) {
    // it 仅在此 if 作用域内有效
}
```

### 折叠表达式、`std::filesystem`

- `std::filesystem`：文件系统操作库
- 内联变量 `inline`

## C++20 新特性

### Concepts（概念）

```cpp
template <typename T>
concept Numeric = std::is_arithmetic_v<T>;

template <Numeric T>
T add(T a, T b) { return a + b; }   // 约束类型
```

### 协程（Coroutines）

- `co_await`、`co_yield`、`co_return`
- 用于异步、惰性求值场景

### Ranges（范围库）

```cpp
#include <ranges>
auto result = v | std::views::filter([](int x){ return x % 2 == 0; })
               | std::views::transform([](int x){ return x * 2; });
```

### 其他
- `std::span`（连续内存视图）
- 三路比较运算符 `<=>`
- `std::format`（格式化输出）

## 现代 C++ 最佳实践

1. **优先智能指针**，避免裸 `new`/`delete`
2. **用 `auto`** 减少冗余类型声明
3. **用范围 for + 引用** 遍历容器（`const auto&`）
4. **用 Lambda** 替代函数对象 / 回调
5. **用 `std::move`** 转移资源避免深拷贝
6. **用 `const`** 声明不可变变量，提升可读性与安全
7. **优先标准库算法**，少手写循环
8. 头文件使用 `#pragma once` 或 include guards

---

上一章：[STL 标准库](stl.md) · 下一章：[编译与构建工具 →](toolchain.md)
