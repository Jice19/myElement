<template>
  <div>
    <h1>按钮组件展示</h1>
    <ul>
      <li>颜色：
        <my-button>默认</my-button>
        <my-button type="primary">primary</my-button>
        <my-button type="success">success</my-button>
        <my-button type="info" >info</my-button>
        <my-button type="warning">success</my-button>
        <my-button type="danger">danger</my-button>
        <my-button disabled>禁用</my-button>
      </li>
      <li>大小：
        <my-button size="small">small</my-button>
        <my-button size="medium">medium</my-button>
        <my-button size="large">large</my-button>
      </li>
      <li>朴素按钮：
        <my-button plain>plain</my-button>
        <my-button type="primary" plain>primary</my-button>
        <my-button type="success" plain>success</my-button>
        <my-button type="info" plain>info</my-button>
        <my-button type="warning" plain>success</my-button>
        <my-button type="danger" plain>danger</my-button>
      </li>
    </ul>

    <h1>Switch组件展示</h1>
    <ul>
      <li>点击获取组件状态(控制台)：
        <my-Switch v-model="isOpen" @change="handleChange" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(true);
const handleChange = (value) => {
  // 触发事件
  console.log("Switch状态:", value);
};
</script>

<style scoped>
li {
  margin-bottom: 10px; /* 设置每个li元素之间的间距 */
}
</style>


