<script setup>
// 在这里编写组件逻辑
const props = defineProps({
  data:{
    type:Array,
    default: () => []
  }
})

const emit = defineEmits(['selectChange'])

const selectChange = (value) => {
  emit('selectChange', value)
}
</script>

<template>
  <select
        @change="selectChange($event.target.value)"
        class="select"
      >
        <option 
          v-for="(title,index) of data"
          :key="index"
          :value="index"
        > {{ title }}</option>
      </select>
</template>

<style scoped>
/* 在这里编写组件样式 */
.select {
      width: 100px;
      height: 30px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px;
      font-size: 14px;
      color: #333;
      background-color: #fff;
      outline: none;
      cursor: pointer;
      &:hover {
      border-color: #999;
      }
      &:focus {
      border-color: #666;
      box-shadow: 0 0 5px rgba(102, 102, 102, 0.5);
      }
    }

</style>