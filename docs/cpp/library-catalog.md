# C++ 库与资源索引

> 从 `devfrank_cpp` 完整迁入的常用 C++ 库、框架与学习资源目录。它适合作为检索索引；新内容优先补充到本知识库对应的主题页面。

基于`awesome-cpp`等资源整理自己常用的实用工具及三方库。

### 目录
- [devfrank\_cpp](#devfrank_cpp)
    - [目录](#目录)
    - [技术网站](#技术网站)
    - [常用库和框架](#常用库和框架)
    - [实践项目](#实践项目)

### 技术网站
- [RUNOOB](https://www.runoob.com/)

### 常用库和框架

C++标准库，包括了STL容器，算法和函数等。

*   [C++ Standard Library](http://en.wikipedia.org/wiki/C%2B%2B_Standard_Library): 是一系列类和函数的集合，使用核心语言编写，也是C++ISO自身标准的一部分。
*   [Standard Template Library](http://en.wikipedia.org/wiki/Standard_Template_Library): 标准模板库。
*   [C POSIX library](http://en.wikipedia.org/wiki/C_POSIX_library):  POSIX系统的C标准库规范。
*   [ISO C++ Standards Committee](https://github.com/cplusplus): C++标准委员会(https://isocpp.org/)。

C++通用框架和库

*   [abseil-cpp](https://github.com/abseil/abseil-cpp): Abseil C++ 通用库。
*   [APR](http://apr.apache.org/): Apache可移植运行时库。另一个跨平台的库。
*   [Boost](https://github.com/boostorg): 大量通用 C++ 库的集合。
*   [CO](https://github.com/idealvin/co) - C++基础库，包含 go-style 协程库，日志库, JSON库, RPC 框架以及其他基本组件。
*   [ETL](https://github.com/ETLCPP/etl): 嵌入式模板库。
*   [ffead-cpp](https://github.com/sumeetchhetri/ffead-cpp): 企业应用程序开发框架。
*   [Folly](https://github.com/facebook/folly): 由Facebook开发和使用的开源C++库。
*   [FunctionalPlus](https://github.com/Dobiasd/FunctionalPlus): C++ 的函数式编程库，编写简洁易读的C++代码。
*   [JUCE](https://github.com/julianstorer/JUCE): 包罗万象的C++类库，用于开发跨平台软件。
*   [Kigs framework](https://github.com/Kigs-framework/kigs): C++免费开源的模块化、多功能、跨平台的RAD框架。
*   [libPhenom](https://github.com/facebook/libphenom): 用于构建高性能和高度可扩展性系统的事件框架。
*   [LibSourcey](https://github.com/sourcey/libsourcey): 用于实时的视频流和高性能网络应用程序的C++11 evented IO。
*   [Qt](http://qt-project.org/): 跨平台的应用程序和用户界面框架。

人工智能

- [ANNetGPGPU](https://github.com/ANNetGPGPU/ANNetGPGPU): 基于GPU(CUDA)的人工神经网络库。
*   [btsk](https://github.com/aigamedev/btsk): 游戏行为树启动器工具。
*   [frugally-deep](https://github.com/Dobiasd/frugally-deep): 使用Keras模型的C++库，只有头文件。
*   [Genann](https://github.com/codeplea/genann): 简单的神经网络C库。
*   [MXNet](https://github.com/apache/incubator-mxnet): 轻量级、便携、灵活的分布式/移动深度学习，具有动态、可感知突变的数据流管理调度程序。适用于Python、R、Julia、Scala、Go、Javascript和更多网站。
*   [PyTorch](https://github.com/pytorch/pytorch): 具有强大CPU加速功能，包含张量和动态神经网络的Python库。
*   [Recast/Detour](https://github.com/recastnavigation/recastnavigation): （3D）导航网格生成器和路径查找，主要用于游戏。
*   [TensorFlow](https://github.com/tensorflow/tensorflow): 使用数据流图进行数值计算的开源软件库。
*   [CNTK](https://github.com/Microsoft/CNTK): Microsoft Cognitive Toolkit (CNTK)，开源的深度学习工具库。
*   [tiny-dnn](https://github.com/tiny-dnn/tiny-dnn): C++11中的无依赖项的深度学习框架，只有头文件。
*   [Veles](https://github.com/Samsung/veles): 用于快速深度学习应用开发的分布式平台。
*   [Kaldi](https://github.com/kaldi-asr/kaldi): 语音识别工具包。

异步事件循环

- [Asio](https://github.com/chriskohlhoff/asio/): 用于网络和底层I/O编程的跨平台 C++ 库，使用现代 C++ 方法为开发者提供一致的异步模型。
*   [Boost.Asio](http://think-async.com/): 用于网络和底层I/O编程的跨平台的 C++ 库。
*   [C++ Actor Framework](https://github.com/actor-framework/actor-framework): C++中Actor Model的开源实现。
*   [libev](http://libev.schmorp.de/): 功能齐全，高性能的时间循环，轻微地仿效libevent，但是不再像libevent一样有局限性，也修复了它的一些bug。
*   [libevent](http://libevent.org/): 事件通知库。
*   [libhv](https://github.com/ithewei/libhv): 跨平台的事件循环库。
*   [libuv](https://github.com/joyent/libuv): 跨平台异步I/O。
*   [promise-cpp](https://github.com/xhawk18/promise-cpp): 实现Promise/A+标准的库，只有头文件。
*   [uvw](https://github.com/skypjack/uvw): libuv的C++封装器。

音频

- [AudioFile](https://github.com/adamstark/AudioFile): 用于读写音频文件的简单C++库。
*   [FMOD](http://www.fmod.org/): 易于使用的跨平台的音频引擎和音频内容的游戏创作工具。
*   [KFR](https://www.kfrlib.com/): 快速、现代的C++ DSP框架，FFT、FIR/IIR滤波器，和采样率转换。
*   [LAME](https://lame.sourceforge.io/using.php): LAME是高质量MPEG音频第三层（MP3）编码器。
*   [libsndfile](https://github.com/erikd/libsndfile/): C++封装的C库，用于通过标准库接口读写包含采样声音的文件。
*   [libsoundio](https://github.com/andrewrk/libsoundio): 用于跨平台实时音频输入输出的C库。
*   [Maximilian](https://github.com/micknoise/Maximilian): C++音频和音乐数字信号处理库。
*   [OpenAL](http://www.openal.org/): 开源音频库---跨平台的音频API。
*   [miniaudio](https://github.com/dr-soft/miniaudio): 单文件音频回放和录制的库。
*   [Opus](http://opus-codec.org/): 一个完全开放的，免版税的，高度通用的音频编解码器。
*   [PortAudio](http://www.portaudio.com/): 免费的、跨平台的、开源的音频I/O库。
*   [SELA](https://github.com/sahaRatul/sela): SimplIE无损音频。
*   [SoLoud](https://github.com/jarikomppa/soloud): 简单便携的游戏音频引擎。
*   [Tonic](https://github.com/TonicAudio/Tonic): C++易用和高效的音频合成。
*   [minimp3](https://github.com/lieff/minimp3): 公共域，无尘室实现的MP3解码器，只有头文件。
*   [Verovio](https://github.com/rism-ch/verovio): 快速、轻量级的音乐符号雕刻库。
*   [Wav2Letter++](https://github.com/facebookresearch/wav2letter/): 公共域，完全用C++编写的快速开放源代码的语音处理库，同时使用ArrayFire张量库和flashlight机器学习库来实现最高的效率。

生物信息，基因组学和生物技术

- [BioC++](http://biocpp.sourceforge.net/): 生物信息学的C++计算库。
- [Chaste](http://www.cs.ox.ac.uk/chaste/): 开放源代码的C++库，用于为生理学和生物学开发的数学模型的计算仿真。

- [libsequence](http://molpopgen.github.io/libsequence/): 用于表示和分析群体遗传学数据的C++库。
- [SeqAn](http://www.seqan.de/): 专注于生物数据序列分析的算法和数据结构。
- [Vcflib](https://github.com/ekg/vcflib): 用于解析和处理VCF文件的C++库。
- [Wham](https://github.com/jewmanchue/wham): 直接把联想测试应用到BAM文件的基因结构变异。

比特流

- [jech/dht](https://github.com/jech/dht): C实现的比特流分布式哈希表库。
- [libtorrent](https://github.com/arvidn/libtorrent)(a.k.a. libtorrent-rasterbar): 高效的、功能完整的C++比特流实现。
- [LibTorrent](https://github.com/rakshasa/libtorrent) (a.k.a. libtorrent-rakshasa): 比特流库。
- [libutp](https://github.com/bittorrent/libutp): uTorrent传输协议库。

化学，地球化学，生物化学

- [d-SEAMS](https://github.com/d-SEAMS/seams-core): 具有Nix的C++和Lua实现的分子动力学轨道分析引擎，它是分子模拟的递延结构分析的首字母缩写。
- [gromacs](https://github.com/gromacs/gromacs): 传递消息的并行分子动力学实现。
- [Reaktoro](https://github.com/reaktoro/reaktoro): C++和python中用于对化学反应系统进行建模的计算框架。
- [LAMMPS](https://github.com/lammps/lammps): 经典的用于材料建模的分子动力学代码，它是大范围原子/分子巨量平行模拟器的首字母缩写。

控制台/终端用户界面，命令行界面

- [Argh!](https://github.com/adishavit/argh): 极简的只有头文件的参数处理程序。
- [Taywee / args](https://github.com/taywee/args): 简单的只有头文件的C++参数解析库。
- [Boost.Program_options](http://www.boost.org/doc/libs/1_57_0/doc/html/program_options.html): 通过常见的方法，例如命令行和配置文件，来获取程序选择项的库。
- [Clara](https://github.com/catchorg/Clara): 用于C++11及更高版本的易于使用、可组合的命令行解析器。
- [cli](https://github.com/daniele77/cli): 用于交互式命令行界面的跨平台的C++14库，只有头文件。
- [CLI11](https://github.com/CLIUtils/CLI11): 单文件或多文件的C++11库，用于简单和高级的CLI解析，只有头文件。

压缩和归档库

*   [ZLib](http://zlib.net/): 非常紧凑的数据流压缩库。
*   [zlib-ng](https://github.com/Dead2/zlib-ng): 用于“下一代”系统的zlib，将一些重要的优化进行嵌入式替换。
*   [zstd](https://github.com/facebook/zstd): Zstandard-快速实时压缩算法。由Facebook开发。
*   [ZZIPlib](http://zziplib.sourceforge.net/): 提供ZIP归档的读权限。

并发和多线程

- [alpaka](https://github.com/ComputationalRadiationPhysics/alpaka): 并行内核加速的抽象库。
- [ArrayFire](https://github.com/arrayfire/arrayfire): 通用GPU库。
- [Async++](https://github.com/Amanieu/asyncplusplus): C++ 11 的轻量级并行框架，受Microsoft PPL库和N3428 C++标准提案启发。
*   [Boost.Compute](https://github.com/kylelutz/compute): 用于OpenCL的C++GPU计算库。
*   [Bolt](https://github.com/HSA-Libraries/Bolt): 针对GPU进行优化的C++模板库。
*   [ck](https://github.com/concurrencykit/ck): 并发基元，安全内存回收机制和非阻塞数据结构。
*   [concurrentqueue](https://github.com/cameron314/concurrentqueue): C++11的快速多生产者、多消费者的无锁并发队列。
*   [Cpp-Taskflow](https://github.com/cpp-taskflow/cpp-taskflow): 具有任务依赖性的快速C++并行编程。
*   [CUB](https://github.com/NVlabs/cub): CUB为CUDA编程模式的每一层提供了最新的可重用软件组件。
*   [cuda-api-wrappers](https://github.com/eyalroz/cuda-api-wrappers): 轻量级的现代C++封装器，用于CUDA GPU的运行时API编程。
*   [cupla](https://github.com/ComputationalRadiationPhysics/cupla): 通过Alpaka在OpenMPA、线程、TBB……运行CUDA/C++的C++ API。
*   [C++React](https://github.com/schlangster/cpp.react): 用于C++11的反应性编程库。
*   [FiberTaskingLib](https://github.com/RichieSams/FiberTaskingLib): 基于任务的多线程库，支持具有任意依赖关系的任务图表。
*   [HPX](https://github.com/STEllAR-GROUP/hpx/): 适用于任何规模的并行分布式应用的通用C++运行时系统。
*   [Intel Games Task Scheduler](https://github.com/GameTechDev/GTS-GamesTaskScheduler): 为了游戏开发者的需要而设计的任务调度框架。
*   [OpenCL](https://www.khronos.org/opencl/): 并行编程的异构系统的开放标准。
*   [OpenMP](http://openmp.org/): OpenMP API。
*   [SObjectizer](https://github.com/Stiffstream/sobjectizer): 实现Actor、Publish-Subscribe和CSP模式的相当小的C++框架。
*   [Quantum](https://github.com/bloomberg/quantum): 建立在[boost::coroutines2](https://www.boost.org/doc/libs/1_65_0/libs/coroutine2/doc/html/index.html)顶层的强大的C++协同调度程序框架。
*   [RaftLib](http://raftlib.io/): RaftLib C++ 库，通过类似iostream的 C++ 运算符实现流/数据流并发性。
*   [readerwriterqueue](https://github.com/cameron314/readerwriterqueue): C++的快速单生产者、单消费者的无锁队列。
*   [stdgpu](https://github.com/stotko/stdgpu): GPU上高效的类似STL的数据结构。
*   [Thrust](http://thrust.github.io/): 类似于C++标准模板库的并行算法库。
*   [transwarp](https://github.com/bloomen/transwarp): 任务并发性的C++库，只有头文件。
*   [VexCL](https://github.com/ddemidov/vexcl): 用于OpenCL/CUDA 的C++向量表达式模板库。
*   [Quantum](https://github.com/bloomberg/quantum): 建立在[boost::coroutines2](https://www.boost.org/doc/libs/1_65_0/libs/coroutine2/doc/html/index.html)顶层的强大的C++协同调度程序框架。
*   [STAPL](http://parasol-lab.gitlab.io/stapl-home/): C++并行编程框架，旨在工作在共享和分布式内存并行电脑上。

配置文件，INI文件

- [inih](https://github.com/benhoyt/inih): C语言的简单.INI文件解析器，很适合嵌入式系统。
- [iniparser](https://github.com/ndevilla/iniparser): INI文件解析器。
- [libconfig](https://github.com/hyperrealm/libconfig): 用于处理结构化配置文件的C、C++库。
- [libconfuse](https://github.com/martinh/libconfuse): C的小型配置文件解析库。
- [simpleini](https://github.com/brofield/simpleini): 跨平台的C++库，提供用于读写INI配置文件的简单API。
- [toml++](https://github.com/marzer/tomlplusplus): TOML解析器和串化器，适用于C++17及更高版本，只有头文件。

密码学和加密库

*   [Bcrypt](http://bcrypt.sourceforge.net/): 一个跨平台的文件加密工具，加密文件可以移植到所有可支持的操作系统和处理器中。
*   [BeeCrypt](https://github.com/fffaraz/awesome-cpp/blob/master): 可移植和快速的加密库。
*   [Botan](http://botan.randombit.net/): C++加密库。
*   [Crypto++](http://www.cryptopp.com/): 一个有关加密方案的免费的C++库。
*   [OpenSSL](http://www.openssl.org/):  一个健壮的，商用的，功能齐全的，开源的加密库。

用于解析逗号分隔值（CSV）文件的库

- [csv2](https://github.com/p-ranav/csv2): 现代C++的快速CSV解析器。
- [Fast C++ CSV Parser](https://github.com/ben-strasser/fast-cpp-csv-parser): 用于读取CSV文件的小型、易于使用和快速的库，只包含头文件。
- [Vince's CSV Parser](https://github.com/vincentlaucsb/csv-parser): 快速、独立、流式的C++17 CSV解析器，具有可选的类型转换和统计信息。

数据库，SQL服务器，ODBC驱动程序和工具

*   [hiberlite](https://github.com/paulftw/hiberlite): 用于Sqlite3的C++对象关系映射。
*   [Hiredis](https://github.com/redis/hiredis): 用于Redis数据库的很简单的C客户端库。
*   [LevelDB](https://github.com/google/leveldb): 由Google编写的快速键值存储库，提供了从字符键到字符串值的有序映射。
*   [LMDB](http://symas.com/mdb/): 符合数据库四大基本元素的嵌入键值存储。
*   [LMDB++](https://github.com/bendiken/lmdbxx): LMDB嵌入式数据库的C++11封装器。
*   [MongoDB C Driver](https://github.com/mongodb/mongo-c-driver): C的MongoDB客户端库。
*   [MongoDB C++ Driver](https://github.com/mongodb/mongo-cxx-driver): MongDB的C++驱动程序。
*   [MongoDB Libbson](https://github.com/mongodb/libbson): BSON实用库。
*   [MySQL++](http://www.tangentsoft.net/mysql++/): 封装了MySql的C API的C++ 封装器。
*   [nanodbc](https://github.com/nanodbc/nanodbc): 用于本机C ODBC API的小型C++封装器。
*   [ODB](https://www.codesynthesis.com/products/odb/): C++的开源、跨平台、跨数据库的对象关系映射（ORM）系统。
*   [redis3m](https://github.com/luca3m/redis3m): 使用干净C++接口的hiredis封装器，支持标记和现成的模式。
*   [RocksDB](https://github.com/facebook/rocksdb): 来自Facebook的嵌入键值的快速存储。
*   [SimDB](https://github.com/LiveAsynchronousVisualizedArchitecture/simdb): 高性能、共享内存、无锁、跨平台、单文件、最小依赖的C++11键值存储。
*   [SOCI](https://github.com/SOCI/soci): C++的数据库抽象层。
*   [SQLite](http://www.sqlite.org/): 一个完全嵌入式的，功能齐全的关系数据库，只有几百KB，可以正确包含到你的项目中。
*   [SQLiteC++](https://github.com/SRombauts/SQLiteCpp): SQLiteC++ (SQLiteCpp)是聪明且易于使用的C++ SQLite3封装器。

调试库， 内存和资源泄露检测，单元测试

*   [backward-cpp](https://github.com/bombela/backward-cpp): C++的漂亮堆栈轨迹打印机。
*   [benchmark](https://github.com/google/benchmark): Google提供的小型微基准支持库。
*   [Boost.Test](http://www.boost.org/doc/libs/master/libs/test/doc/html/index.html): Boost测试库。
*   [check](https://github.com/libcheck/check): C的单元测试框架。
*   [doctest](https://github.com/onqtam/doctest): 功能最轻便的单个C++头文件的测试框架。
*   [Catch](https://github.com/philsquared/Catch): 一个很时尚的，C++原生的框架，只包含头文件，用于单元测试，测试驱动开发和行为驱动开发。
*   [Catch2](https://github.com/catchorg/Catch2): 一个很时尚的，C++原生的框架，只包含头文件，用于单元测试，测试驱动开发和行为驱动开发。
*   [Celero](https://github.com/DigitalInBlue/Celero): C++基准测试框架。
*   [CppUTest](https://github.com/cpputest/cpputest): C/C++的单元测试和模拟框架。
*   [CUTE](http://cute-test.com/): 更容易的C++单元测试。
*   [CMocka](https://cmocka.org/): 支持模拟对象的C单元测试框架。
*   [CppUnit](http://www.freedesktop.org/wiki/Software/cppunit/): 由JUnit移植过来的C++测试框架。
*   [CTest](http://www.cmake.org/cmake/help/v2.8.8/ctest.html): CMake测试驱动程序。
*   [dbg-macro](https://github.com/sharkdp/dbg-macro): C++的dbg（……）宏。
*   [Deleaker](http://www.deleaker.com/): 用于资源泄露检查的工具，包括内存、GDI和处理泄露。

游戏引擎

*   [Acid](https://github.com/Equilibrium-Games/Acid): 高速的C++17 Vulkan游戏引擎。
*   [Allegro](http://liballeg.org/): 主要用于视频游戏和多媒体编程的跨平台库。
*   [Cocos2d-x](http://www.cocos2d-x.org/): 用于构建2D游戏、交互式书籍、演示和其它图形应用程序的多平台框架。
*   [Corange](https://github.com/orangeduck/Corange): 用纯C、SDL、OpenGL编写的游戏引擎。
*   [Crown](https://github.com/dbartolini/crown): Crown是一款通用的数据驱动游戏引擎，使用正统C++从零开始编写，并牢记简约和面向数据的设计理念。
*   [delta3d](http://sourceforge.net/projects/delta3d/): 健壮的仿真平台。
*   [EnTT](https://github.com/skypjack/entt): 游戏与现代C++的碰撞。
*   [GamePlay](https://github.com/gameplay3d/GamePlay): 用于创建2D/3D移动和桌面游戏的跨平台本机C++游戏框架。
*   [Godot](https://github.com/godotengine/godot): 功能齐全、开源、有MIT许可的游戏引擎。
*   [Grit](http://gritengine.com/): 社区项目，用于构建一个免费的游戏引擎，实现开放的世界3D游戏。
*   [Halley](https://github.com/amzeratul/halley): 用C++14编写的轻量级游戏引擎，带有“真实的”实体组件系统。
*   [KlayGE](https://github.com/gongminmin/KlayGE): 具有基于插件架构的跨平台、开源的游戏引擎。
*   [nCine](https://github.com/nCine/nCine): 注重性能的跨平台2D游戏引擎，用C++11编写，还可以选择使用Lua编写脚本。
*   [OpenXRay](https://github.com/OpenXRay/xray-16): 在S.T.A.L.K.E.R.游戏系列中使用的社群修改的X射线引擎。
*   [Oxygine](http://oxygine.org/): 跨平台的2D C++游戏引擎。
*   [Panda3D](https://github.com/panda3d/panda3d): 游戏引擎，用于Python和C++程序的3D渲染和游戏开发的框架。
*   [PixelGameEngine](https://github.com/OneLoneCoder/olcPixelGameEngine): olcPixelGameEngine的官方发行版，该工具用于javidx9的YouTube视频和项目。
*   [Polycode](http://polycode.org/): C++实现的用于创建游戏的开源框架（与Lua绑定）。
*   [raylib](https://github.com/raysan5/raylib): 简单、易于使用的库，用于享受视频游戏编程的乐趣。
*   [Spring](https://github.com/spring/spring): 强大、免费、跨平台的RTS游戏引擎。
*   [Torque2D](https://github.com/GarageGames/Torque2D): 为2D游戏开发构建的开源、跨平台C++引擎。
*   [Torque3D](https://github.com/GarageGames/Torque3D): 为3D游戏开发构建的开源C++引擎。
*   [toy engine](https://github.com/hugoam/toy): toy是一个轻量的模块化的 C++ 游戏引擎，并提供简单的、有表现力的C++惯用法来快速迭代设计功能齐全的2D和3D游戏。
*   [Urho3D](https://urho3d.github.io/): C++实现的免费、轻量级、跨平台的2D和3D游戏引擎，受到OGRE和Horde3D很大的启发。

图形用户界面

*   [Boden](https://github.com/AshampooSystems/boden): 本机、移动、跨平台的GUI框架。
*   [CEGUI](http://cegui.org.uk/):  灵活的跨平台GUI库。
*   [Elements](https://github.com/cycfi/elements): 轻量级、细粒度、分辨率无关的模块化GUI库。
*   [FLTK](http://www.fltk.org/index.php): 快速，轻量级的跨平台的C++GUI工具包。
*   [GacUI](https://github.com/vczh-libraries/GacUI): GPU加速的C++用户界面，具有所见即所得的开发工具，支持XML，具有内置数据绑定和MVVM功能。
*   [GTK+](http://www.gtk.org/): 用于创建图形用户界面的多平台工具包。
*   [gtkmm](http://www.gtkmm.org/en/): 用于受欢迎的GUI库GTK+的官方C++接口。
*   [imgui](https://github.com/ocornut/imgui): 拥有最小依赖关系的即时模式图形用户界面。
*   [implot](https://github.com/epezent/implot): imgui的即时模式绘图控件。
*   [iup](https://www.tecgraf.puc-rio.br/iup): 构建图形用户界面的多平台工具包。
*   [libui](https://github.com/andlabs/libui): C中简单、可移植（但是不灵活）的GUI库，使用其支持的每一种平台的本机GUI技术。
*   [MyGUI](http://mygui.info/): 快速，灵活，简单的GUI。
*   [nana](http://nanapro.org/en-us/): Nana是现代C++风格的GUI编程的跨平台库。
*   [NanoGui](https://github.com/mitsuba-renderer/nanogui): 简约、跨平台的控件库，用于OpenGL 3.x及更高版本。
*   [nuklear](https://github.com/Immediate-Mode-UI/Nuklear): 单个头文件的ANSI C gui库。
*   [QCustomPlot](http://qcustomplot.com/): 没有更多依赖关系的Qt绘图控件。
*   [Qwt](http://qwt.sourceforge.net/): 用户与技术应用的Qt 控件。
*   [QwtPlot3D](http://qwtplot3d.sourceforge.net/): 功能丰富的基于Qt/OpenGL的C++编程库，本质上提供了一群3D控件。
*   [RmlUi](https://github.com/mikke89/RmlUi): 进化的HTML/CSS用户界面库，libRocket的分支。 
*   [Sciter](http://sciter.com/): Sciter是可嵌入的HTML/CSS/脚本语言引擎，旨在用于现代桌面应用程序的UI层。
*   [wxWidgets](http://wxwidgets.org/) C++库，允许开发人员使用一个代码库可以为widows， Mac OS X，Linux和其他平台创建应用程序。
*   [Yue](https://github.com/yue/yue): 创建本机跨平台GUI应用的库。

图形

*   [assimp](https://github.com/assimp/assimp): 开放资产导入库（assimp）是跨平台的3D模型导入库，旨在为不同的3D资产文件格式提供通用的API。
*   [bgfx](https://github.com/bkaradzic/bgfx): 跨平台的渲染库。
*   [Blend2D](https://github.com/blend2d/blend2d): 由JIT编译器提供技术支持的2D矢量图形引擎。
*   [bs::framework](https://github.com/GameFoundry/bsf): 用于实时图形应用开发的现代C++14库。
*   [Cairo](http://www.cairographics.org/): 支持多种输出设备的2D图形库。
*   [C-Turtle](https://github.com/walkerje/C-Turtle): 充当Clmg封装器的C++11 turtle图形库，只有头文件。
*   [Diligent Engine](https://github.com/DiligentGraphics/DiligentEngine): 现代、跨平台、低阶的3D图形库。
*   [DirectXTK](https://github.com/Microsoft/DirectXTK): 用于在C++中编写DirectX 11.x代码的帮助类的集合。
*   [GLFW](https://github.com/glfw/glfw): 简单、跨平台的OpenGL处理库。
*   [herebedragons](https://github.com/kosua20/herebedragons): 使用各种引擎、框架或者API实现的基本3D场景。
*   [Horde3D](https://github.com/horde3d/Horde3D) 一个小型的3D渲染和动画引擎。
*   [Ion](https://github.com/google/ion): 小型高效的库集合，用于构建使用3D图形的跨平台客户端或服务器应用程序。
*   [Irrlicht](http://irrlicht.sourceforge.net/): C++编写的高性能实时3D引擎。
*   [libigl](https://github.com/libigl/libigl): 简单的C++几何处理库。
*   [LLGL](https://github.com/LukasBanana/LLGL): 低水平图形库（LLGL）是现代图形API的薄抽象层。
*   [magnum](https://github.com/mosra/magnum): 用于游戏和数据可视化的轻量级和模块化的 C++ 11 /C++ 14图形中间件。
*   [NanoVG](https://github.com/memononen/nanovg): OpenGL之上的抗锯齿2D矢量图形库，用于UI和可视化。
*   [Ogre 3D](http://www.ogre3d.org/): 用C++编写的一个面向场景，实时，灵活的3D渲染引擎（并非游戏引擎）。
*   [OpenSceneGraph](http://www.openscenegraph.org/): 具有高性能的开源3D图形工具包。
*   [OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv): Pixar的库，用于评估和渲染CPU和GPU上的细分曲面。
*   [OpenVDB](http://www.openvdb.org/): 用于存储、编辑、渲染体积数据库的库和工具。
*   [Panda3D](http://www.panda3d.org/): 用于3D渲染和游戏开发的框架，用Python和C++编写。
*   [Partio](https://github.com/wdas/partio): 用于处理粒子数据的库，支持大多数常见文件形式。
*   [Skia](https://github.com/google/skia) 用于绘制文字，图形和图像的完整的2D图形库。
*   [TinySpline](https://github.com/msteinbeck/tinyspline): 小型但强大的ANSI C库，用于差值、转换和查询任意NURBS、B-样条函数和贝赛尔曲线。
*   [urho3d](https://github.com/urho3d/Urho3D) 跨平台的渲染和游戏引擎。
*   [Yocto/GL](https://github.com/xelatihy/yocto-gl): 用于数据驱动的基于物理图形的微型C++库。

图像处理

*   [Boost.GIL](http://www.boost.org/doc/libs/1_56_0/libs/gil/doc/index.html): 通用图像库。
*   [CImg](http://cimg.sourceforge.net/): 用于图像处理的小型开源C++工具包。
*   [CxImage](http://www.xdp.it/cximage.htm): 用于加载，保存，显示和转换的图像处理和转换库，可以处理的图片格式包括 BMP, JPEG, GIF, PNG, TIFF, MNG, ICO, PCX, TGA, WMF, WBMP, JBG, J2K。
*   [Dlib](https://github.com/davisking/dlib): 现代C++11的机器学习、计算机视觉、数值优化和深度学习工具包。
*   [FreeImage](http://freeimage.sourceforge.net/): 开源库，支持现在多媒体应用所需的通用图片格式和其他格式。
*   [libfacedetection](https://github.com/ShiqiYu/libfacedetection): 用于图像中人脸检测的开源库，其人脸检测的速度能达到1500FPS。
*   [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo): 使用SIMD指令来加速基线JPEG编码和解码的JPEG图像编解码器。
*   [OpenCV](http://opencv.org/):  开源计算机视觉类库。
*   [OpenEXR](http://www.openexr.com/): 具有高动态范围成像的跨平台库。
*   [OpenImageIO](https://github.com/OpenImageIO/oiio): 强大的图像和纹理处理库，支持多种常见的有损和RAW格式。
*   [Simd](https://github.com/ermig1979/Simd): 使用SIMD的C++图像处理库: SSE，SSE2，SSE3，SSSE3，SSE4.1，SSE4.2，AVX，AVX2，AVX-512，VMX（Altivec）和VSX（Power7），NEON for ARM。
*   [stb-image](https://github.com/nothings/stb/blob/master/stb_image.h): STB单个头文件的图像加载库。
*   [tesseract-ocr](https://code.google.com/p/tesseract-ocr/): OCR引擎。
*   [TinyEXIF](https://github.com/cdcseacave/TinyEXIF): 用于JPEG的微型ISO兼容的C++ EXIF和XMP解析库。
*   [Video++](https://github.com/matt-42/vpp): C++ 14高性能的视频和图像处理库。
*   [VIGRA](https://github.com/ukoethe/vigra): 用于图像分析通用C++计算机视觉库。
*   [VTK](http://www.vtk.org/): 用于3D计算机图形学，图像处理和可视化的开源免费软件系统。

国际化

*   [utf8.h](https://github.com/sheredom/utf8.h): C和C++的单个头文件的utf8字符串函数。

进程间通信

- [Apache Thrift](https://thrift.apache.org/): 高效的跨语言IPC/RPC，可在C++、Java、Python、PHP、C#和许多其它语言之间运行。最初是由Facebook开发。
- [gRPC](https://github.com/grpc/grpc): 高性能、开源、通用的RPC框架。
- [Ice](https://github.com/zeroc-ice/ice): 全面的RPC框架，支持C++、C＃、Java、JavaScript、Python等。
- [libjson-rpc-cpp](https://github.com/cinemast/libjson-rpc-cpp): 用于C++服务器和客户端的JSON-RPC框架。
- [rpclib](https://github.com/rpclib/rpclib): 现代C++的msgpack-RPC服务器和客户端库。
- [simple-rpc-cpp](https://github.com/pearu/simple-rpc-cpp): C / C++函数的简单RPC封装生成器。
- [WAMP](http://wamp.ws/): 提供RPC和发布/订阅消息传递模式。（各种实现，各种语言）
- [xmlrpc-c](http://xmlrpc-c.sourceforge.net/): 基于XML和HTTP的轻量级RPC库。

Json

*   [Boost.PropertyTree](http://www.boost.org/doc/libs/1_55_0/doc/html/property_tree.html): 属性树解析器/生成器，可用于解析XML / JSON / INI / Info文件。
*   [cJSON](https://github.com/DaveGamble/cJSON): ANSI C的超轻量级JSON解析器。
*   [json](https://github.com/nlohmann/json): 用于现代C++的JSON。
*   [JsonCpp](https://github.com/open-source-parsers/jsoncpp): 可与JSON交互的C++库。
*   [RapidJSON](https://github.com/miloyip/rapidjson): 用于C++的快速JSON 解析生成器，包含SAX和DOM两种风格的API。

日志

*   [Boost.Log](http://www.boost.org/doc/libs/1_56_0/libs/log/doc/html/index.html): 设计非常模块化，并且具有扩展性。
*   [Easylogging++](https://github.com/easylogging/easyloggingpp): 适用于C++ 11（或更高版本）应用程序的超轻量级、高性能的日志库。
*   [glog](https://github.com/google/glog): Google日志模块的C++实现。
*   [Log4cpp](http://log4cpp.sourceforge.net/): C++类库，用于灵活地添加日志到文件，系统日志，IDSA和其他地方。
*   [log4cplus](https://github.com/log4cplus/log4cplus): 易于使用的C++日志API，可提供对日志管理和配置的线程安全、灵活且任意粒度的控制。
*   [loguru](https://github.com/emilk/loguru): 轻量级的C++日志库。
*   [plog](https://github.com/SergiusTheBest/plog): C++可移植且简单的日志，少于1000行代码。
*   [reckless](https://github.com/mattiasflodin/reckless): C++低延迟、高吞吐量、异步的日志库。
*   [spdlog](https://github.com/gabime/spdlog): 超级快的C++日志库，只包含头文件。
*   [templog](http://www.templog.org/): 小型、轻量级的 C++ 库，可以添加日志到你的C++应用程序中。
*   [Quill](https://github.com/odygrd/quill): 异步、跨平台、低时延的日志库。

机器学习

*   [Caffe](https://github.com/BVLC/caffe): 快速的神经网络框架。
*   [CCV](https://github.com/liuliu/ccv): 基于C /缓存/核心的计算机视觉库，现代计算机视觉库。
*   [darknet](https://github.com/pjreddie/darknet): 用C和CUDA编写的开源神经网络框架。
*   [Fido](https://github.com/FidoProject/Fido): 用于嵌入式电子和机器人技术的高度模块化的C++机器学习库。
*   [flashlight](https://github.com/facebookresearch/flashlight): 来自Facebook AI研究中心的快速、灵活的机器学习库，其完全用C++编写，基于ArrayFire张量库。
*   [libsvm](https://github.com/cjlin1/libsvm): 支持向量机的简单、易用、高效的库。
*   [MeTA](https://github.com/meta-toolkit/meta): 现代C++的数据科学工具包。
*   [Minerva](https://github.com/dmlc/minerva): 快速、灵活的深度学习系统。
*   [mlpack](http://www.mlpack.org/): 可扩展的C++机器学习库。
*   [OpenCV](https://github.com/Itseez/opencv): 开源计算机视觉库。

数学

*   [Apophenia](https://github.com/b-k/apophenia): 用于统计和科学计算的C库。
*   [Armadillo](http://arma.sourceforge.net/): 用于线性代数和科学计算的快速C++库。
*   [autodiff](https://github.com/autodiff/autodiff): 用于自动微分的现代、快速且富有表现力的C++库。
*   [Boost.Multiprecision](http://www.boost.org/doc/libs/master/libs/multiprecision/doc/html/index.html): 在C++中提供更高范围/精度的整数、有理数和浮点数类型，只包含头文件或者在GMP / MPFR / LibTomMath后端。
*   [ceres-solver](http://ceres-solver.org/): 来自谷歌的C++库，用于建模和解决大型复杂非线性最小平方问题。
*   [CGAL](https://github.com/CGAL/cgal): 高效，可靠的几何算法集合。
*   [cml](http://cmldev.net/): 用于游戏和图形的免费C++数学库。
*   [Dlib](https://github.com/davisking/dlib): 现代C++11的机器学习、计算机视觉、数值优化和深度学习工具包。
*   [Eigen](http://eigen.tuxfamily.org/): 高级C++模板头文件库，包括线性代数，矩阵，向量操作，数值解决和其他相关的算法。
*   [ExprTK](http://www.partow.net/programming/exprtk/): C++数学表达式工具包库（ExprTk）是一个易于使用、易于集成且非常高效的运行时数学表达式解析器和评估引擎。
*   [Geometric Tools](https://www.geometrictools.com/): 用于数学、图形、图像分析和物理学领域计算的C++库。
*   [GLM](https://github.com/g-truc/glm): 只包含头文件的C++数学库，可与OpenGL的GLSL数学匹配并互操作。
*   [GMTL](http://ggt.sourceforge.net/): 数学图形模板库是一组广泛实现基本图形的工具。
*   [GMP](https://gmplib.org/): 用于个高精度计算的C/C++库，处理有符号整数，有理数和浮点数。
*   [Klein](https://github.com/jeremyong/klein): 快速、SIMD优化的C++ 17几何代数库，用于点、线和平面投影、相交、连接、刚体运动等。
*   [linalg.h](https://github.com/sgorsten/linalg): C++的单头文件、公共域、短向量数学库。
*   [MIRACL](https://github.com/CertiVox/MIRACL): 多精度整数和有理数算法加密库。
*   [muparser](http://beltoforion.de/article.php?a=muparser): muParser是用C++编写的可扩展、高性能的数学表达式解析库。
*   [LibTomMath](https://github.com/libtom/libtommath): 完全用C编写的免费、开源、可移植的数论多精度整数库。
*   [linmath.h](https://github.com/datenwolf/linmath.h): 精益线性数学库，主要用于图形编程。
*   [lp_solve](https://sourceforge.net/projects/lpsolve): 用于制定和解决线性编程问题的库。
*   [OpenBLAS](https://github.com/xianyi/OpenBLAS): 基于GotoBLAS2 1.13 BSD版本的优化BLAS库。
*   [QuantLib](https://github.com/lballabio/quantlib)v: 用于计量金融的免费/开源库。
*   [StatsLib](https://github.com/kthohr/stats): 统计分布函数的C++库，只包含头文件。
*   [SymEngine](https://github.com/symengine/symengine): 快速符号处理库，用C++重写了SymPy的核心。
*   [TinyExpr](https://github.com/codeplea/tinyexpr): 用于解析和评估字符串中的数学表达式的C库。
*   [Vc](https://github.com/VcDevel/Vc): C++的SIMD矢量类。
*   [Versor](http://versor.mat.ucsb.edu/): （快速的）几何代数的通用C++库，包括欧几里得、投影，保角、时空等。
*   [Wykobi](http://www.wykobi.com/): 高效、健壮且易于使用的C++库，面向C++ 2D / 3D的计算几何例程。
*   [xtensor](https://github.com/QuantStack/xtensor): 受NumPy语法启发的C++ 14库，用于使用多维数组表达式进行数值分析。
*   [universal](https://github.com/stillwater-sc/universal): 只包含头文件的C++ 14库，实现任意假定算数。假定数值系统是一个锥形浮点，比IEEE浮点更有效。假定数使可复现的计算科学成为可能。

内存分配

- [Boehm GC](https://github.com/ivmai/bdwgc): C和C++的保守的垃圾回收器。
- [C Smart Pointers](https://github.com/Snaipe/libcsptr): （GNU）C编程语言的智能指针。
- [Hoard](https://github.com/emeryberger/Hoard): 快速、可扩展和节约内存的Malloc，支持Linux、Windows和Mac。
- [jemalloc](https://github.com/jemalloc/jemalloc): 通用的malloc（3）实现，强调避免存储碎片和可扩展的并发支持。
- [memory](https://github.com/foonathan/memory): 兼容STL的C++内存分配器库。
- [memory-allocators](https://github.com/mtrebi/memory-allocators): 自定义内存分配器，可提高动态内存分配的性能。
- [mimalloc](https://github.com/microsoft/mimalloc): 具有出色性能的紧凑型通用分配器。
- [tgc](https://github.com/orangeduck/tgc): 用 ~500 LOC编写的C语言微型垃圾回收器。

多媒体

*   [GStreamer](http://gstreamer.freedesktop.org/): 构建媒体处理组件图形的库。
*   [libass](https://github.com/libass/libass): ASS / SSA字幕格式的便携式字幕渲染器。
*   [libass](https://github.com/libass/libass): 处理多媒体内容（例如音频、视频、字幕和相关元数据）的库和工具的集合。
*   [LIVE555 Streaming Media](http://www.live555.com/liveMedia/): 使用开放标准协议(RTP/RTCP, RTSP, SIP) 的多媒体流库。
*   [libVLC](https://wiki.videolan.org/LibVLC): libVLC (VLC SDK)媒体框架。
*   [MediaInfoLib](https://github.com/MediaArea/MediaInfoLib): 用于视频和音频文件中最相关的技术和标签数据的方便统一显示。
*   [QtAv](https://github.com/wang-bin/QtAV): 基于Qt和FFmpeg的多媒体播放框架，能够帮助你轻而易举地编写出一个播放器。
*   [SDL](http://www.libsdl.org/): 简单直控媒体层。
*   [SFML](http://www.sfml-dev.org/): 快速，简单的多媒体库。
*   [TagLib](https://github.com/taglib/taglib): 用于读取和编辑几种流行音频格式的元数据的库。

网络

*   [ACE](http://www.cs.wustl.edu/~schmidt/ACE.html): C++面向对象网络编程工具包。
*   [Boost.Asio](http://think-async.com/): 用于网络和底层I/O编程的跨平台的C++库。
*   [Boost.Beast](https://github.com/boostorg/beast): 在C++ 11中基于Boost.Asio构建的HTTP和WebSocket。
*   [Breep](https://github.com/Organic-Code/Breep): 基于事件的高级C++ 14点对点库。
*   [C++ REST SDK](https://github.com/Microsoft/cpprestsdk): C++ REST SDK（以前称为Casablanca）。
*   [Restbed](https://github.com/corvusoft/restbed): C++ 11异步RESTful框架。
*   [Restinio](https://github.com/Stiffstream/restinio): 只有头文件的C++ 14库，为您提供嵌入式HTTP / Websocket服务器。
*   [c-ares](https://github.com/c-ares/c-ares): 用于异步DNS请求的C库。
*   [cpp-httplib](https://github.com/yhirose/cpp-httplib): 单文件的C++ 11 HTTP / HTTPS服务器库，只包含头文件。
*   [cpp-netlib](http://cpp-netlib.org/): 高级网络编程的开源库集合。
*   [cpr](https://github.com/whoshuu/cpr): 现代C++ HTTP请求库，具有简单但功能强大的接口。模仿Python Requests模块。
*   [curlcpp](https://github.com/JosephP91/curlcpp): CURL（libcurl）的面向对象C++封装器。
*   [DPDK](https://github.com/DPDK/dpdk): 用于快速打包处理的数据平面开发工具、库和驱动程序。
*   [Dyad.c](https://github.com/rxi/dyad): C的异步网络。
*   [ENet](https://github.com/lsalzman/enet): 可靠的UDP网络库。
*   [evpp](https://github.com/Qihoo360/evpp): 具有TCP / UDP / HTTP协议的C++高性能网络。
*   [H2O](https://github.com/h2o/h2o): 优化的HTTP服务器，支持HTTP / 1.x和HTTP / 2。它也可以用作库。
*   [HTTP Parser](https://github.com/nodejs/http-parser): C的http请求/响应解析器。
*   [KCP](https://github.com/skywind3000/kcp/blob/master/README.en.md): 快速、可靠的ARQ协议，可帮助应用程序减少网络延迟。
*   [libcurl](http://curl.haxx.se/libcurl/): 多协议文件传输库。
*   [libhttpserver](https://github.com/etr/libhttpserver): 用于创建嵌入式Rest HTTP服务器（以及更多）的C++库。
*   [Libmicrohttpd](http://www.gnu.org/software/libmicrohttpd/): GNU libmicrohttpd是一个小型C库，可以轻松地将HTTP服务器作为另一个应用程序的一部分运行。
*   [libpcap](https://github.com/the-tcpdump-group/libpcap): 用于网络流量捕获的可移植C / C++库。
*   [libquic](https://github.com/devsisters/libquic): 从Chromium的QUIC实现中提取的QUIC协议库。
*   [librdkafka](https://github.com/edenhill/librdkafka): 用于C和C++的Apache Kafka客户端库。
*   [libwebsockets](https://github.com/warmcat/libwebsockets): 提供客户端和服务器库的轻量级纯C WebSocket实现。
*   [lwIP](http://savannah.nongnu.org/projects/lwip/): 轻量级TCP / IP堆栈。
*   [Mongoose](https://github.com/cesanta/mongoose)<span style="text-decoration: underline;">: </span>非常轻量级的网络服务器。
*   [MQTT-C](https://github.com/LiamBindle/MQTT-C): 适用于嵌入式系统和类PC机的便携式MQTT C客户端。
*   [mTCP](https://github.com/mtcp-stack/mtcp): 用于多核系统的高度可扩展的用户级TCP堆栈。
*   [Muduo](https://github.com/chenshuo/muduo): 用于Linux多线程服务器的C++非阻塞网络库。
*   [nghttp2](https://github.com/nghttp2/nghttp2): HTTP / 2 C库。
*   [Onion](https://github.com/davidmoreno/onion): C语言HTTP服务器库，其设计为轻量级，易使用。
*   [PF_RING™](https://github.com/ntop/PF_RING): 高速打包处理框架。
*   [PicoHTTPParser](https://github.com/h2o/picohttpparser): 微小、原始、快速的HTTP请求/响应解析器。
*   [POCO](https://github.com/pocoproject): 用于构建网络和基于互联网应用程序的C++类库，可以运行在桌面，服务器，移动和嵌入式系统。
*   [Proxygen](https://github.com/facebook/proxygen): Facebook的C++ HTTP库集合，包括易于使用的HTTP服务器。
*   [RakNet](https://github.com/OculusVR/RakNet): 为游戏开发人员提供的跨平台的开源C++网络引擎。
*   [restclient-cpp](https://github.com/mrtazz/restclient-cpp): 用于C++的简单REST客户端。它包装libcurl用于HTTP请求。
*   [Seasocks](https://github.com/mattgodbolt/seasocks): 具有WebSockets支持的简单、小型的C++嵌入式Web服务器。
*   [Silicon](http://siliconframework.org/): 高性能、面向中间件的C++ 14 http Web框架。
*   [tlse](https://github.com/eduardsui/tlse): 单个C文件的TLS 1.2 / 1.3实现，使用tomcrypt作为加密库。
*   [Tufão](https://github.com/vinipsmaker/tufao): 基于Qt构建的C++异步Web框架。
*   [uriparser](https://github.com/uriparser/uriparser): 严格符合RFC 3986的URI解析和处理库。
*   [uWebSockets](https://github.com/uNetworking/uWebSockets): µWS是最轻量级、高效和可伸缩的WebSocket和HTTP服务器的实现之一。
*   [WAFer](https://github.com/riolet/WAFer): 基于C语言的超轻型软件平台，用于可扩展的服务器端和网络应用。为C程序员考虑了node.js。
*   [Wangle](https://github.com/facebook/wangle): 客户端/服务器应用程序框架，用于构建异步的、事件驱动的现代C++服务。
*   [wdt](https://github.com/facebook/wdt): 可嵌入式库（和命令行工具），旨在通过多个TCP路径尽可能快地在2个系统之间传输数据。
*   [WebSocket++](https://github.com/zaphoyd/websocketpp): 基于C++/Boost Aiso的websocket 客户端/服务器库。
*   [PcapPlusPlus](https://github.com/seladb/PcapPlusPlus): 跨平台的C++网络嗅探以及数据包解析和构建的框架。
*   [ZeroMQ](http://zeromq.org/): 高速，模块化的异步通信库。

物理学

*   [Box2D](https://code.google.com/p/box2d/): 2D的游戏物理引擎。
*   [Bullet](https://github.com/bulletphysics/bullet3): 3D的游戏物理引擎。
*   [Chipmunk](https://github.com/slembcke/Chipmunk2D): 快速、轻量级的2D游戏物理库。
*   [LiquidFun](https://github.com/google/liquidfun): 2D的游戏物理引擎。
*   [Newton Dynamics](https://github.com/MADEAPPS/newton-dynamics): 用于物理环境实时仿真的集成解决方案。
*   [ODE](http://www.ode.org/): 开放动力学引擎-开源，高性能库，模拟刚体动力学。
*   [PhysX](https://github.com/NVIDIAGameWorks/PhysX-3.4): Nvidia开发的开源的实时物理引擎中间件SDK，作为Nvidia GameWorks软件套件的一部分。
*   [Project Chrono](https://github.com/projectchrono/chrono): 开源的多物理场仿真引擎。
*   [Quantum++](https://github.com/vsoftco/qpp): 现代的C++ 11量子计算库。
*   [Simbody](https://github.com/simbody/simbody): 高性能C++多体动力学/物理库，模拟关节生物力学和机械系统，像车辆，机器人和人体骨骼。
*   [SOFA](https://github.com/sofa-framework/sofa): SOFA是一个针对实时仿真的开源框架，其着重于医学仿真。

机器人学

*   [MOOS-IvP](http://moos-ivp.org/): 一组开源C++模块，提供机器人平台的自主权，尤其是自主的海洋车辆。
*   [MRPT](http://www.mrpt.org/): 移动机器人编程工具包。
*   [PCL](https://github.com/PointCloudLibrary/pcl): 点云库是一个独立的，大规模的开放项目，用于2D/3D图像和点云处理。
*   [Robotics Library (RL)](http://www.roboticslibrary.org/): 一个独立的C++库，包括机器人动力学，运动规划和控制。
*   [RobWork](http://www.robwork.dk/jrobwork/): 一组C++库的集合，用于机器人系统的仿真和控制。
*   [ROS](http://wiki.ros.org/): 机器人操作系统，提供了一些库和工具帮助软件开发人员创建机器人应用程序。

科学计算

*   [AMGCL](https://github.com/ddemidov/amgcl): 只包含头文件的C++库，用于解决具有代数多重网格的大型稀疏线性系统。
*   [FFTW](http://www.fftw.org/): 用一维或者多维计算DFT的C语言库。
*   [GSL](http://www.gnu.org/software/gsl/): GNU科学库。
*   [TileDB](https://github.com/TileDB-Inc/TileDB): 快速密集和稀疏多维数组的DBMS。
*   [Trilinos](https://github.com/trilinos/Trilinos): 高性能的PDE解算器。
*   [Torch](https://github.com/torch/torch7): 科学的计算框架，广泛支持将GPU放在首位的机器学习算法。

*   [Lua](http://www.lua.org/): 用于配置文件和基本应用程序脚本的小型快速脚本引擎。
*   [LuaBridge](https://github.com/vinniefalco/LuaBridge): 轻量级、无依赖的库，用于将Lua绑定到C++。
*   [luacxx](https://github.com/dafrito/luacxx): 用于创建Lua绑定的C++ 11 API。

序列化

*   [Bitsery](https://github.com/fraillt/bitsery): 只包含头文件的C++二进制序列化库。
*   [Bond](https://github.com/Microsoft/bond): 用于处理模式化数据的开源、跨平台框架。
*   [Boost.Serialization](https://www.boost.org/doc/libs/master/libs/serialization/doc/index.html): Boost序列化库。
*   [cereal](https://github.com/USCiLab/cereal): C++11 序列化库。
*   [cppcodec](https://github.com/tplgy/cppcodec): 只包含头文件的C++ 11库，具有一致、灵活的API来编码/解码base64，base32和hex。
*   [FlatBuffers](https://github.com/google/flatbuffers): 内存高效的序列化库。
*   [MessagePack](https://github.com/msgpack/msgpack-c): C/C++的高效二进制序列化库，例如 JSON。
*   [mrpt-serialization](https://github.com/mrpt/mrpt/): 已版本控制的二进制或文本格式的序列化。
*   [nanopb](https://github.com/nanopb/nanopb): ANSI C中的小型代码大小的协议缓冲区实现。
*   [protobuf](http://code.google.com/p/protobuf/): 协议缓冲，谷歌的数据交换格式。
*   [YAS](https://github.com/niXman/yas): 非常快的序列化库，支持二进制/文本/ JSON格式。

视频

*   [libvpx](http://www.webmproject.org/code/): VP8/VP9编码解码SDK。
*   [FFmpeg](https://www.ffmpeg.org/): 一个完整的，跨平台的解决方案，用于记录，转换视频和音频流。
*   [libde265](https://github.com/strukturag/libde265): 开放的h.265视频编解码器的实现。
*   [x265](https://bitbucket.org/multicoreware/x265/wiki/Home): 开放的H.265视频编解码器实现。
*   [OpenH264](https://github.com/cisco/openh264): 开源H.364 编解码器。
*   [Theora](http://www.theora.org/): 免费开源的视频压缩格式。
*   [Vireo](https://github.com/twitter/vireo/): Twitter的轻量级、多功能的视频处理库。

Web应用框架

*   [Crow](https://github.com/ipkn/crow): 一个C++微型web框架（灵感来自于Python Flask）。
*   [Cutelyst](https://github.com/cutelyst/cutelyst): 在Qt上构建的C++ Web框架，使用Catalyst（Perl）框架的简单方法。
*   [Drogon](https://github.com/an-tao/drogon): 基于C++ 14/17的高性能HTTP应用程序框架。
*   [facil.io](https://github.com/boazsegev/facil.io): 事件型、高性能的C Web框架，支持HTTP、WebSocket、SSE等。
*   [oat++](https://github.com/oatpp/oatpp): 轻量、零依赖的框架，可创建高性能的Web服务。
*   [Pistache](http://pistache.io/): Pistache是一个用纯C++ 11编写的C++ REST框架，没有外部依赖性。
*   [QDjango](https://github.com/jlaine/qdjango/): 使用C++编写的，基于Qt库的web框架，试图效仿Django API，因此得此名。
*   [Wt](http://www.webtoolkit.eu/wt): 开发Web应用的C++库。

XML
*   [Boost.PropertyTree](http://www.boost.org/doc/libs/1_55_0/doc/html/property_tree.html): 属性树解析器/生成器，可用于解析XML / JSON / INI / Info文件。
*   [RapidXml](http://rapidxml.sourceforge.net/): 试图创建最快速的XML解析器，同时保持易用性，可移植性和合理的W3C兼容性。
*   [TinyXML2](https://github.com/leethomason/tinyxml2): 简单快速的C++CML解析器，可以很容易集成到其它项目中。
*   [TinyXML++](https://code.google.com/p/ticpp/): TinyXML的一个全新的接口，使用了C++的许多许多优势，模板，异常和更好的异常处理。

编译器与构建系统

*   [Clang](http://clang.llvm.org/): LLVM的C编译器，支持C++ 11/14 / 1z C11，由LLVM团队开发。
*   [GCC](https://gcc.gnu.org/): GNU编译器集合，支持C++ 11/14 / 1z C11和OpenMP。
*   [LLVM](http://llvm.org/): 模块化和可重用编译器和工具链技术的集合。
*   [Microsoft Visual C++](http://msdn.microsoft.com/en-us/vstudio/hh386302.aspx): MSVC，由微软公司开发。
*   [Bazel](https://bazel.build/): Google提供的多语言、快速且可扩展的构建系统。
*   [CMake](http://www.cmake.org/): 跨平台的免费开源软件用于管理软件使用独立编译的方法进行构建的过程。
*   [Conan](https://conan.io/): C / C++程序包管理器，开源的。
*   [Ninja](http://martine.github.io/ninja/): 专注于速度的小型构建系统。
*   [Scons](http://www.scons.org/): 使用Python scipt 配置的软件构建工具。
*   [Premake](http://premake.github.io/): 配置有Lua脚本的工具，可以在Windows、Mac OS X和Linux上为Visual Studio、GNU Make、Xcode、Code::Blocks等生成项目文件。
*   [Vcpkg](https://github.com/microsoft/vcpkg): Windows，Linux和MacOS的C++库管理器。
*   [XMake](https://xmake.io/): 基于Lua的C / C++的跨平台构建实用程序。

调试器与静态代码分析

*   [Cppcheck](http://cppcheck.sourceforge.net/): 静态C/C++代码分析工具
*   [cpplint](https://github.com/cpplint/cpplint): 遵循Google C++样式指南的C++样式检查器。
*   [Clang Static Analyzer](http://clang-analyzer.llvm.org/index.html): 查找C、C++和Objective-C程序bug的源代码分析工具。
*   [Comparison of debuggers](http://en.wikipedia.org/wiki/Comparison_of_debuggers): 来自维基百科的调试器列表。
*   [GDB](https://www.gnu.org/software/gdb): GNU调试器。
*   [LLDB](http://lldb.llvm.org/): LLDB调试器。
*   [Metashell](https://metashell.readthedocs.org/): 交互式模板元程序设计，其中包括MDB metadebugger。
*   [Valgrind](http://valgrind.org/): 内存调试，内存泄露检测，性能分析工具。
*   [x64dbg](http://x64dbg.com/): Windows的开源x64 / x32调试器。

### 实践项目
TODO
