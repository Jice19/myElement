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
</style>