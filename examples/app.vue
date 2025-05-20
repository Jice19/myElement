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

    <h1>输入框组件展示</h1>
    
  </div>
</template>

<script setup>

</script>

<style scoped>
li {
  margin-bottom: 10px; /* 设置每个li元素之间的间距 */
}
</style>


