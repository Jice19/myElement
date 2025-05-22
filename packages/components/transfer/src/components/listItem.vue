<script setup>
// 在这里编写组件逻辑
const props = defineProps({
  data:{
    type:Array,
    default:() => {}
  },
  leftOrRight:{
    type:String,
    validator(value){
      return ['left','right'].includes(value) 
    }
  },
})

const emit = defineEmits(['checkboxClick','dragItem'])

const checkboxClick = (checked,leftOrRight,item) => {
  emit('checkboxClick',checked,leftOrRight,item)
}

const dragItem = (item) => {
  emit('dragItem',item)
}
</script>

<template>
  <div 
    v-for="item of data"
            :key="item.id"
            :class="['list-item',item.disabled ? 'disabled' : '']"
            :draggable="!item.disabled"
            @dragstart="dragItem(item)"
          >
      <input 
         type="checkbox"
        :disabled="item.disabled"
        :id="'_checkbox_' + item.id"
        @click="checkboxClick($event.target.checked,  leftOrRight ,item )"
            >
            <label :for="'_checkbox_' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<style scoped>
/* 在这里编写组件样式 */
.list-item{
      display: flex;
      align-items: center;
      padding: 5px 10px;  
      height: 30px;
      background-color: rgb(220, 212, 212);
      font-size: 15px;
      font-family: Arial, sans-serif;
      font-weight: bold;
      color: #333;

      &.disabled{
        background-color: rgb(110, 108, 108);
        cursor: not-allowed;
        opacity: .7;
      }
    }
</style>