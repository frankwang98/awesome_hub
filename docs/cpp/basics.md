# 基础语法速查

## Hello World

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## 基本数据类型

| 类型 | 说明 | 示例 |
| --- | --- | --- |
| `int` | 整型 | `int a = 10;` |
| `double` | 双精度浮点 | `double pi = 3.14;` |
| `float` | 单精度浮点 | `float f = 1.5f;` |
| `char` | 单字符 | `char c = 'A';` |
| `bool` | 布尔值 | `bool ok = true;` |
| `auto` | 自动推导类型 | `auto x = 42;` |
| `const` | 常量（不可修改） | `const int N = 100;` |

## 变量与输入输出

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;
    std::cout << "请输入姓名和年龄: ";
    std::cin >> name >> age;
    std::cout << "你好, " << name << ", " << age << " 岁!" << std::endl;
    return 0;
}
```

## 控制流

### 条件分支

```cpp
if (score >= 60) {
    std::cout << "及格" << std::endl;
} else {
    std::cout << "不及格" << std::endl;
}

switch (day) {
    case 1: std::cout << "周一"; break;
    case 2: std::cout << "周二"; break;
    default: std::cout << "其他"; break;
}
```

### 循环

```cpp
// for 循环
for (int i = 0; i < 5; ++i) {
    std::cout << i << " ";
}

// while 循环
int n = 0;
while (n < 5) {
    n++;
}

// do-while 循环（至少执行一次）
do {
    // ...
} while (condition);

// 范围 for（现代 C++）
for (const auto& item : vec) {
    // ...
}
```

## 函数

```cpp
// 函数声明与定义
int add(int a, int b) {
    return a + b;
}

// 默认参数
void greet(const std::string& name = "world") {
    std::cout << "Hello, " << name << std::endl;
}

// 函数重载（同名不同参数）
int max(int a, int b) { return a > b ? a : b; }
double max(double a, double b) { return a > b ? a : b; }

// 内联函数
inline int square(int x) { return x * x; }
```

## 命名空间

```cpp
namespace math {
    double pi = 3.14159;
    double circleArea(double r) { return pi * r * r; }
}

// 使用
double area = math::circleArea(2.0);

// using 声明
using namespace std;        // 引入整个命名空间（谨慎使用）
using std::cout;            // 仅引入单个名字（推荐）
```

## 数组与字符串

```cpp
#include <string>
#include <vector>

// 内置数组
int arr[5] = {1, 2, 3, 4, 5};

// C++ 字符串
std::string s = "Hello";
s += " World";
int len = s.length();       // 11
std::string sub = s.substr(0, 5);  // "Hello"

// 动态数组（vector）
std::vector<int> v = {1, 2, 3};
v.push_back(4);
```

---

上一章：[C++ 概览与学习路线](README.md) · 下一章：[面向对象编程 →](oop.md)
