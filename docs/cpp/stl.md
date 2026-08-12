# STL 标准库

**STL（Standard Template Library）** 是 C++ 标准库的核心，包含**容器、迭代器、算法、函数对象**四大组件，提供泛型编程能力。

## 容器（Containers）

### 顺序容器

| 容器 | 特点 | 适用场景 |
| --- | --- | --- |
| `std::vector` | 动态数组，随机访问 O(1)，尾部增删快 | 大多数情况的首选 |
| `std::list` | 双向链表，任意位置插入/删除 O(1) | 频繁在中间增删 |
| `std::deque` | 双端队列，头尾增删快 | 头尾都需操作的场景 |
| `std::array` | 固定大小数组（栈上） | 已知大小且需性能 |

### 关联容器

| 容器 | 特点 |
| --- | --- |
| `std::map` | 有序键值对，基于红黑树，O(log n) |
| `std::set` | 有序不重复集合 |
| `std::unordered_map` | 哈希表键值对，平均 O(1) |
| `std::unordered_set` | 哈希集合 |

### 容器适配器
- `std::stack`（栈）、`std::queue`（队列）、`std::priority_queue`（优先队列）

## vector 常用操作

```cpp
#include <vector>

std::vector<int> v = {3, 1, 4, 1, 5};
v.push_back(9);          // 尾部添加
v.pop_back();            // 尾部删除
int size = v.size();     // 元素个数
bool empty = v.empty();  // 是否为空
v[0];                    // 随机访问
v.at(0);                 // 带边界检查的访问
v.insert(v.begin(), 0);  // 头部插入
v.erase(v.begin());      // 删除指定位置
v.clear();               // 清空
v.resize(10);            // 调整大小
```

## map / unordered_map

```cpp
#include <map>
#include <unordered_map>

std::map<std::string, int> scores;
scores["Alice"] = 95;
scores["Bob"] = 88;

// 遍历
for (const auto& [name, score] : scores) {  // 结构化绑定（C++17）
    std::cout << name << ": " << score << std::endl;
}

// 查找
auto it = scores.find("Alice");
if (it != scores.end()) {
    // 找到
}
```

## 迭代器（Iterators）

```cpp
// 迭代器遍历
for (auto it = v.begin(); it != v.end(); ++it) {
    std::cout << *it << " ";
}

// 范围 for（推荐）
for (const auto& x : v) {
    std::cout << x << " ";
}
```

## 算法（Algorithms）

```cpp
#include <algorithm>

// 排序
std::sort(v.begin(), v.end());                        // 升序
std::sort(v.begin(), v.end(), std::greater<int>());   // 降序

// 查找
auto it = std::find(v.begin(), v.end(), 5);

// 其他常用
std::max(a, b);  std::min(a, b);
std::reverse(v.begin(), v.end());
std::accumulate(v.begin(), v.end(), 0);   // 求和
std::count(v.begin(), v.end(), 1);        // 计数
std::remove(v.begin(), v.end(), 1);       // 移除（配合 erase）
```

## Lambda 表达式

```cpp
// 基本语法 [捕获](参数) -> 返回类型 { 函数体 }
std::sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;   // 降序
});

// 捕获外部变量
int threshold = 3;
auto result = std::count_if(v.begin(), v.end(),
    [threshold](int x) { return x > threshold; });
```

捕获方式：
- `[=]`：按值捕获所有外部变量
- `[&]`：按引用捕获所有外部变量
- `[x]` / `[&x]`：捕获指定变量
- `[this]`：捕获当前对象

## 泛型编程（模板）

```cpp
// 函数模板
template <typename T>
T maxValue(T a, T b) {
    return a > b ? a : b;
}

// 类模板
template <typename T>
class Box {
public:
    void set(const T& v) { value_ = v; }
    T get() const { return value_; }
private:
    T value_;
};

Box<int> intBox;
intBox.set(42);
```

---

上一章：[内存与指针](memory.md) · 下一章：[现代 C++（11/14/17/20）→](modern.md)
