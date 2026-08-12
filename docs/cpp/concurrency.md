# 并发与多线程

C++11 起标准库原生支持多线程。编译时需链接 `-lpthread`（Linux）。

## 创建线程

```cpp
#include <thread>
#include <iostream>

void work(int id) {
    std::cout << "线程 " << id << " 运行中" << std::endl;
}

int main() {
    std::thread t1(work, 1);
    std::thread t2(work, 2);

    t1.join();   // 等待 t1 完成
    t2.join();   // 等待 t2 完成
    return 0;
}
```

## 互斥锁（Mutex）

保护共享数据，防止数据竞争。

```cpp
#include <mutex>

std::mutex mtx;
int counter = 0;

void increment() {
    for (int i = 0; i < 1000; ++i) {
        std::lock_guard<std::mutex> lock(mtx);  // RAII 加锁，作用域结束自动解锁
        ++counter;
    }
}
```

### 锁类型

| 类型 | 说明 |
| --- | --- |
| `std::mutex` | 基本互斥锁，不可递归 |
| `std::recursive_mutex` | 同一线程可多次加锁 |
| `std::timed_mutex` | 带超时的锁 |
| `std::shared_mutex` | 读写锁（多读单写） |

### 锁管理

```cpp
// lock_guard：构造时加锁，析构时解锁（最简单）
std::lock_guard<std::mutex> lock(mtx);

// unique_lock：更灵活，可手动 lock/unlock、延迟加锁
std::unique_lock<std::mutex> lock(mtx);
lock.unlock();
lock.lock();

// 同时锁多个（避免死锁）
std::lock(mtx1, mtx2);
```

## 条件变量（Condition Variable）

用于线程间同步，等待某个条件成立。

```cpp
#include <condition_variable>

std::mutex mtx;
std::condition_variable cv;
bool ready = false;

// 生产者
{
    std::lock_guard<std::mutex> lock(mtx);
    ready = true;
}
cv.notify_one();   // 唤醒一个等待线程

// 消费者
std::unique_lock<std::mutex> lock(mtx);
cv.wait(lock, []{ return ready; });   // 等待 ready 为 true
```

## 原子操作（std::atomic）

无锁的原子变量，性能优于互斥锁。

```cpp
#include <atomic>

std::atomic<int> counter{0};

void increment() {
    for (int i = 0; i < 1000; ++i) {
        counter.fetch_add(1);   // 原子自增
    }
}
// 最终 counter 一定等于线程数 * 1000
```

## 异步任务（std::async / future）

```cpp
#include <future>

int compute(int n) { return n * n; }

// 异步启动
std::future<int> f = std::async(std::launch::async, compute, 10);

// 获取结果（阻塞等待）
int result = f.get();   // 100
```

## 线程安全要点

1. **共享数据用锁保护**，避免数据竞争
2. **避免死锁**：固定加锁顺序或使用 `std::lock`
3. **优先原子操作**而非互斥锁（简单计数场景）
4. **用 `join()` 确保线程完成**再退出主程序
5. 避免在线程中访问已销毁的对象
6. 条件变量等待需配合 `while` 循环（防止**伪唤醒**）

```cpp
// 正确姿势：用 while 防止伪唤醒
std::unique_lock<std::mutex> lock(mtx);
cv.wait(lock, []{ return ready; });  // wait 带谓词，内部就是 while 循环
```

## 常用并发模式

| 模式 | 说明 |
| --- | --- |
| 生产-消费 | 生产者放入队列，消费者取出处理 |
| 线程池 | 预创建线程，复用执行任务 |
| 读者-写者 | 多读单写，用 `shared_mutex` |
| 并行归约 | 分治后合并结果（如并行求和） |

---

上一章：[编译与构建工具](toolchain.md) · 下一章：[精选书单与资源 →](resources.md)
