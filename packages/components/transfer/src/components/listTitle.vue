<template>
  <h1 class="list-title">{{ props.title }}</h1>
</template>
 
<script setup>
  const props= defineProps({
    title:{
      type:String,
      default: '列表'
    }
  })
</script>

<style scoped>
/* 在这里编写组件样式 */
.list-title{
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: normal;
      margin: 0;
      color:#666;
      border-bottom: 1px solid #ccc;
      background-color: #efefef;
      font-size: 14px;
    }
</style>