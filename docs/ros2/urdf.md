# URDF 与建模

**URDF（Unified Robot Description Format）** 是描述机器人物理结构的 XML 格式，用于定义机器人的**连杆（link）**与**关节（joint）**，可在 rviz2 和 Gazebo 中可视化与仿真。

## 基本结构

```xml
<robot name="my_robot">
  <!-- 连杆定义 -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.5 0.1"/>
      </geometry>
    </visual>
  </link>

  <!-- 关节定义 -->
  <joint name="joint1" type="continuous">
    <parent link="base_link"/>
    <child link="wheel"/>
    <origin xyz="0.2 0 0" rpy="0 0 0"/>
    <axis xyz="0 0 1"/>
  </joint>
</robot>
```

## 常用标签

### link（连杆）
```xml
<link name="base_link">
  <visual>     <!-- 可视化外观 -->
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <geometry>
      <box size="0.4 0.4 0.1"/>      <!-- 长方体 -->
      <cylinder radius="0.05" length="0.2"/>  <!-- 圆柱 -->
      <sphere radius="0.1"/>         <!-- 球体 -->
      <mesh filename="model.stl"/>   <!-- 网格 -->
    </geometry>
    <material name="red">
      <color rgba="1 0 0 1"/>
    </material>
  </visual>
  <collision>  <!-- 碰撞体积 -->
    <geometry>
      <box size="0.4 0.4 0.1"/>
    </geometry>
  </collision>
  <inertial>   <!-- 惯性参数 -->
    <mass value="1.0"/>
    <inertia ixx="0.1" ixy="0" ixz="0"
             iyy="0.1" iyz="0" izz="0.1"/>
  </inertial>
</link>
```

### joint（关节）
```xml
<!-- type 可选：revolute / continuous / prismatic / fixed / floating / planar -->
<joint name="joint1" type="revolute">
  <parent link="base_link"/>
  <child link="link1"/>
  <origin xyz="0 0 0.2" rpy="0 0 0"/>
  <axis xyz="0 0 1"/>
  <limit lower="-3.14" upper="3.14" effort="1.0" velocity="1.0"/>
</joint>
```

## 查看与验证

```bash
# 在 rviz2 中查看模型
ros2 run urdf_tutorial display.launch.py model:=robot.urdf

# 检查 URDF 语法
check_urdf robot.urdf

# 查看模型结构树
urdf_to_graphiz robot.urdf   # 生成 graph
```

## Xacro（宏）

Xacro 是 URDF 的宏扩展，支持变量、数学运算，让复杂机器人建模更简洁。

```xml
<robot name="my_robot" xmlns:xacro="http://www.ros.org/wiki/xacro">
  <!-- 定义属性 -->
  <xacro:property name="wheel_radius" value="0.1"/>

  <!-- 定义宏 -->
  <xacro:macro name="wheel" params="name x">
    <link name="${name}_wheel">
      <visual>
        <geometry>
          <cylinder radius="${wheel_radius}" length="0.05"/>
        </geometry>
      </visual>
    </link>
  </xacro:macro>

  <!-- 使用宏 -->
  <xacro:wheel name="left" x="-0.2"/>
  <xacro:wheel name="right" x="0.2"/>
</robot>
```

## 与 Gazebo 结合

- 在 URDF 中添加 `<gazebo>` 标签配置传感器、插件、摩擦等物理属性
- `ros2 launch gazebo_ros gazebo.launch.py` 启动仿真
- 使用 `spawn_entity` 将机器人放入仿真环境

```bash
ros2 run gazebo_ros spawn_entity.py -topic robot_description -entity my_robot
```

## URDF 建模要点

1. **树形结构**：每个 link 只能有一个 parent，不能有环
2. **base_link 常为根**，作为机器人本体
3. 为**传感器**（相机、雷达）建立独立 link 并连接到本体
4. `visual` 决定显示，`collision` 决定碰撞，`inertial` 决定动力学
5. 复杂模型优先使用 **Xacro** 管理参数与宏
6. 建模后用 `check_urdf` 验证语法、`rviz2` 检查显示

---

上一章：[TF 坐标变换](tf.md) · 下一章：[Launch 启动文件 →](launch.md)
