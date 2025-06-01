# jice-element

```javascript
//组件的使用main.js
import { createApp } from 'vue'
import App from './App.vue'
import TestUI from "@jice19/jicecomponents/es";
import '@jice19/jicecomponents/theme-chalk/style.css';

const app = createApp(App);
app.use(TestUI);
app.mount('#app')

```

## MyButton 按钮组件

### 组件功能

基础按钮组件，支持多种颜色、尺寸、状态及样式配置，适用于表单提交、操作触发等场景。

### 组件属性

| 参数       | 说明               | 类型    | 可选值                                                  | 默认值    |
| ---------- | ------------------ | ------- | ------------------------------------------------------- | --------- |
| `type`     | 按钮类型           | String  | `default`/`primary`/`success`/`info`/`warning`/`danger` | `default` |
| `size`     | 按钮尺寸           | String  | `small`/`medium`/`large`                                | `medium`  |
| `disabled` | 禁用状态           | Boolean | `true`/`false`                                          | `false`   |
| `plain`    | 朴素（无填充）风格 | Boolean | `true`/`false`                                          | `false`   |

### 示例代码



```vue
<!-- 颜色类型 -->
<my-button>默认</my-button>
<my-button type="primary">primary</my-button>
<my-button type="success">success</my-button>
<my-button type="info">info</my-button>
<my-button type="warning">warning</my-button>
<my-button type="danger">danger</my-button>
<my-button disabled>禁用</my-button>

<!-- 尺寸类型 -->
<MyButton size="small">small</MyButton>
<MyButton size="medium">medium</MyButton>
<MyButton size="large">large</MyButton>

<!-- 朴素风格 -->
<MyButton plain>plain</MyButton>
<MyButton type="primary" plain>primary</MyButton>

```

## MySwitch 开关组件

### 组件功能

开关状态切换组件，支持自定义动画速度、标签文本、颜色等配置，适用于状态切换场景。

### 组件属性

| 参数             | 说明                 | 类型    | 可选值        | 默认值    |
| ---------------- | -------------------- | ------- | ------------- | --------- |
| `v-model`        | 双向绑定开关状态     | Boolean | -             | `false`   |
| `speed`          | 动画切换速度（毫秒） | Number  | -             | `500`     |
| `labelChecked`   | 开启状态标签文本     | String  | -             | `开启`    |
| `labelUnchecked` | 关闭状态标签文本     | String  | -             | `关闭`    |
| `colorChecked`   | 开启状态轨道颜色     | String  | 合法 CSS 颜色 | `#409EFF` |
| `colorUnchecked` | 关闭状态轨道颜色     | String  | 合法 CSS 颜色 | `#C0CCDA` |

### 事件

| 事件名   | 说明                 | 回调参数              |
| -------- | -------------------- | --------------------- |
| `change` | 状态切换时触发的事件 | 最新状态值（Boolean） |

### 示例代码



```vue
<!-- 默认状态 -->
<my-Switch v-model="isOpen" @change="handleChange" />

<!-- 自定义速度 -->
<my-Switch v-model="isOpen" :speed="2000" />

<!-- 自定义标签文本 -->
<my-Switch v-model="isOpen" labelChecked="开启" labelUnchecked="关闭" />

<!-- 自定义颜色 -->
<my-Switch v-model="isOpen" colorChecked="#ff0000" colorUnchecked="#0000ff" />

<!-- 自定义标签文本 -->
<MySwitch v-model="isOpen" labelChecked="开启" labelUnchecked="关闭" />

<!-- 自定义颜色 -->
<MySwitch v-model="isOpen" colorChecked="#ff0000" colorUnchecked="#0000ff" />
```

## TInput 输入框组件

### 组件功能

多功能输入框组件，支持文本输入、密码输入、文本域、清除功能、禁用状态等，适用于数据录入场景。

### 组件属性

| 参数          | 说明                                | 类型          | 可选值                       | 默认值  |
| ------------- | ----------------------------------- | ------------- | ---------------------------- | ------- |
| `v-model`     | 双向绑定输入值                      | String/Number | -                            | -       |
| `type`        | 输入类型                            | String        | `text`/`password`/`textarea` | `text`  |
| `placeholder` | 占位文本                            | String        | -                            | -       |
| `clearable`   | 是否显示清除按钮                    | Boolean       | `true`/`false`               | `false` |
| `disabled`    | 禁用状态                            | Boolean       | `true`/`false`               | `false` |
| `rows`        | 文本域行数（仅 type=textarea 有效） | Number        | -                            | `3`     |

### 示例代码



```vue
<!-- 基础输入框 -->
<TInput v-model="message" placeholder="请输入内容" />

<!-- 密码输入框 -->
<TInput v-model="password" type="password" showPassword placeholder="请输入密码" />

<!-- 带清除功能的输入框 -->
<TInput v-model="searchText" clearable placeholder="搜索内容" />

<!-- 文本域 -->
<TInput v-model="description" type="textarea" rows="5" placeholder="请输入描述信息" />

<!-- 禁用状态 -->
<TInput v-model="disabledText" disabled placeholder="禁用状态" />

<!-- 数值输入框 -->
<TInput v-model.number="age" type="number" placeholder="请输入年龄" />
```

## Message 全局提示组件

### 组件功能

全局提示信息组件，支持成功、失败等状态提示，通过按钮点击触发提示。

### 调用方法

通过全局属性 `$message` 调用，参数为对象：



```javascript
this.$message({
  type: 'success/error', // 提示类型
  message: '提示内容' // 文本信息
});
```

### 示例代码



```vue
<!-- 成功提示按钮 -->
<my-button type="success" @click="handleMessage">success</my-button>

<!-- 失败提示按钮 -->
<my-button type="danger" @click="handleMessageError">danger</my-button>
```



```javascript
// 组件内方法定义
const handleMessage = () => {
  appContext.config.globalProperties.$message({
    type: 'success',
    message: 'This is a success message!'
  });
};

const handleMessageError = () => {
  appContext.config.globalProperties.$message({
    type: 'error',
    message: 'This is a error message!'
  });
};
```

## TTransfer 穿梭框组件

### 组件功能

数据穿梭选择组件，支持分组数据展示、禁用项过滤，适用于多选项转移场景（如权限配置、标签选择等）。

### 组件属性

| 参数         | 说明             | 类型   | 示例数据结构                                  |
| ------------ | ---------------- | ------ | --------------------------------------------- |
| `data`       | 数据源           | Array  | 包含 `title`（分组标题）和 `data`（子项数组） |
| `rightTitle` | 右侧已选列表标题 | String | `已选择机型`                                  |

### 子项数据结构


```javascript
{
  id: Number, // 唯一标识
  phone_name: String, // 显示文本
  disabled: Boolean // 是否禁用（不可选择）
}
```

### 示例代码


```vue
<TTransfer
  :data="data"
  rightTitle="已选择机型"
></TTransfer>
```



```javascript
// 数据源定义
const data = [
  {
    title: '华为',
    data: [
      { id: 1, phone_name: 'Mate 50', disabled: false },
      { id: 2, phone_name: 'Mate 60', disabled: false },
      // 更多子项...
    ]
  },
  // 其他分组...
];
```

## 组件使用说明

1. **全局注册**：在 Vue 项目入口文件（如 `main.js`）中引入组件并注册为全局组件。
2. **局部引用**：在单文件组件中按需引入（示例中已通过 `import` 语句引入）。
3. **样式依赖**：需确保组件库 CSS 样式已正确引入项目。

你可以直接将以上内容保存为 `.md` 文件，作为组件库的文档说明。如果需要补充其他信息（如组件事件、插槽等），可以随时告诉我！