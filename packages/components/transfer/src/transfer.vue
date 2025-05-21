<script setup>
// 在这里编写组件逻辑
import PropsDefination from './transfer.js'
import {useTargetIndex ,useComputedData , useRightListData} from './hooks.js'
const props = defineProps(PropsDefination)
// 成功获取数据
// console.log(props.data, props.rigehtTitle)
const options = props.data.map(({title}) => title)
const [targetIndex, setTargetIndex] = useTargetIndex(0)

const [rightListData, addRightListData,removeRightListData] = useRightListData([])
const {leftTitle, leftListData} = useComputedData(props.data,targetIndex, rightListData)

</script>

<template>
  <div>
    <div>
      <select
        @change="setTargetIndex($event.target.value)"
        class="select"
      >
        <option 
          v-for="(title,index) of options"
          :key="index"
          :value="index"
        > {{ title }}</option>
      </select>
    </div>

    <div class="transfer">
      <div class="box left-list">
        <h1 class="list-title">{{ leftTitle }}</h1>
        <div>
          <div 
            v-for="item of leftListData"
            :id="'_checkbox_' + item.id"
            :key="item.id"
            :class="['list-item',item.disabled ? 'disabled' : '']"
          >
          <input 
            type="checkbox"
            :disabled="item.disabled">
            <label :for="'_checkbox_' + item.id">{{ item.phone_name }}</label>
        </div>
        </div>
      </div>

      <div class="box button-group">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>

      <div class="box right-list">
        <h1 class="list-title">{{ rightTitle }}</h1>
        <div>

        </div>
      </div>
    </div>
  </div>
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

.transfer {
  width: 360px;
  height: 360px;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-radius: 10px;

  .box{
    width: 120px;
    height: 100%;
    
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

    .list-item{
      display: flex;
      align-items: center;
      padding: 5px 10px;  
      height: 30px;
      background-color: rgb(212, 215, 51);
      font-size: 15px;
      font-family: Arial, sans-serif;
      font-weight: bold;
      color: #333;

      &.disabled{
        background-color: rgb(245, 5, 5);
        cursor: not-allowed;
      }
    }

    &.button-group{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;

      button{
        width: 30px;
        height: 30px;
        margin: 5px;
        border-radius: 10px;
        border: none;
        background-color: rgb(196, 198, 207);
        cursor: pointer;
        &:hover{
          background-color: #ccc;
        }
        &:disabled{
          opacity: .8;
        }
      }
    }
  }
}
</style>