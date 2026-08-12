# 面向对象编程

## 类与对象

```cpp
#include <iostream>
#include <string>

class Person {
public:
    // 构造函数（可带默认参数）
    Person(const std::string& name, int age)
        : name_(name), age_(age) {}

    // 成员函数
    void introduce() const {
        std::cout << "我是 " << name_ << ", " << age_ << " 岁" << std::endl;
    }

    // 访问器（getter）
    std::string getName() const { return name_; }

    // 修改器（setter）
    void setAge(int age) { age_ = age; }

private:
    std::string name_;
    int age_;
};

int main() {
    Person p("小明", 18);
    p.introduce();
    return 0;
}
```

## 三大特性

### 1. 封装（Encapsulation）
- 用 `private` / `protected` 隐藏内部实现
- 通过 `public` 接口（方法）访问数据
- 好处：安全、易维护、可控制访问

### 2. 继承（Inheritance）

```cpp
class Animal {
public:
    virtual void speak() const {
        std::cout << "动物在叫" << std::endl;
    }
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void speak() const override {
        std::cout << "汪汪!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void speak() const override {
        std::cout << "喵喵!" << std::endl;
    }
};
```

继承访问权限：
- `public` 继承：基类的 `public` 仍是 `public`，`protected` 仍是 `protected`
- `protected` 继承：基类的 `public`/`protected` 都变为 `protected`
- `private` 继承：基类的 `public`/`protected` 都变为 `private`

### 3. 多态（Polymorphism）
- **编译时多态**：函数重载、模板
- **运行时多态**：虚函数 + 继承

```cpp
// 运行时多态：通过基类指针调用派生类方法
void makeSpeak(const Animal& a) {
    a.speak();  // 根据实际类型调用对应的 speak()
}

Dog d;
Cat c;
makeSpeak(d);  // "汪汪!"
makeSpeak(c);  // "喵喵!"
```

## 构造函数与析构函数

| 类型 | 说明 |
| --- | --- |
| 默认构造函数 | 无参数，`Person() {}` |
| 带参构造函数 | `Person(const std::string& n, int a)` |
| 拷贝构造函数 | `Person(const Person& other)`，深拷贝用 |
| 移动构造函数 | `Person(Person&& other) noexcept`（现代 C++） |
| 析构函数 | `~Person() {}`，对象销毁时释放资源 |

## 特殊成员函数

```cpp
class Resource {
public:
    // 拷贝构造函数（深拷贝）
    Resource(const Resource& other) {
        data_ = new int(*other.data_);
    }
    // 拷贝赋值运算符
    Resource& operator=(const Resource& other) {
        if (this != &other) {
            delete data_;
            data_ = new int(*other.data_);
        }
        return *this;
    }
    // 析构函数
    ~Resource() {
        delete data_;
    }
private:
    int* data_;
};
```

> **Rule of Five**：如果类管理资源，应同时定义析构函数、拷贝构造、拷贝赋值、移动构造、移动赋值。

## 虚函数与抽象类

```cpp
// 纯虚函数 → 抽象类（不能实例化）
class Shape {
public:
    virtual double area() const = 0;   // 纯虚函数
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    Circle(double r) : r_(r) {}
    double area() const override { return 3.14159 * r_ * r_; }
private:
    double r_;
};
```

- **虚析构函数**：基类析构函数应声明为 `virtual`，否则派生类资源可能泄漏
- **override**：显式标注覆盖，编译器检查签名匹配
- **final**：禁止类被继承或虚函数被重写

## `this` 指针

- `this` 指向当前对象，常用于区分成员与参数同名情况
- 链式调用：返回 `*this`

```cpp
class Counter {
public:
    Counter& add(int n) { count_ += n; return *this; }
    int get() const { return count_; }
private:
    int count_ = 0;
};

Counter c;
c.add(1).add(2).add(3);  // 链式调用，count_ = 6
```

---

上一章：[基础语法速查](basics.md) · 下一章：[内存与指针 →](memory.md)
