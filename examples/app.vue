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
        <li>默认状态(触发事件控制台)：
          <my-Switch v-model="isOpen" @change="handleChange" />
        </li>
        <li>自定义速度：
          <my-Switch v-model="isOpen" :speed="2000"  />
        </li>
        <li>自定义标签文本：
          <my-Switch v-model="isOpen" labelChecked="开启" labelUnchecked="关闭"  />
        </li>
        <li>自定义颜色：
          <my-Switch v-model="isOpen" colorChecked="#ff0000" colorUnchecked="#0000ff"  />
        </li>
      </ul>

      <h1>Message全局提示组件展示</h1>
      <ul>
        <li>成功提示：
          <my-button type="success"  @click="handleMessage">success</my-button>
        </li>
        <li>失败提示：
          <my-button type="danger"  @click="handleMessageError">danger</my-button>
        </li>
      </ul>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { TMessage } from "@test-ui/components";

// switch开始
const isOpen = ref(true);
const handleChange = (value) => {
  // 触发事件
  console.log("Switch状态:", value);
};
// switch结束


// message开始
const handleMessage = () => {
  TMessage({
    type: "success",
    message: "操作成功",
  });
};

const handleMessageError = () => {
  TMessage({
    type: "error",
    message: "操作失败",
  });
};
// message结束
</script>

<style scoped>
li {
  margin-bottom: 10px; /* 设置每个li元素之间的间距 */
}
</style>


