<script setup>
// 在这里编写组件逻辑
import selector from './components/selector.vue'
import listTitle from './components/listTitle.vue'
import PropsDefination from './transfer.js'
import {useTargetIndex ,
        useComputedData , 
        useRightListData, 
        useCheckedData,
} from './hooks.js'
const props = defineProps(PropsDefination)
// 成功获取数据
// console.log(props.data, props.rigehtTitle)
const options = props.data.map(({title}) => title)
const [targetIndex, setTargetIndex] = useTargetIndex(0)

const [checkedData,
        addCheckedData,
        removeCheckedData
      ] = useCheckedData([])

const [rightListData,
        addRightListData,
        removeRightListData
      ] = useRightListData([],checkedData)

const {leftTitle, 
        leftListData,
        tranferButtonDisabled
      } = useComputedData(props.data,targetIndex, rightListData,checkedData)

const setCheckedData = (checked,leftOrRight,item) =>{
  checked
   ? addCheckedData(leftOrRight,item) 
  : removeCheckedData(leftOrRight,item.id)
}

</script>

<template>
  <div>
    <div>
      <selector
        :data="options"
        @selectChange="setTargetIndex"
      ></selector>
    </div>

    <div class="transfer">
      <div class="box left-list">
        <listTitle
          :title="leftTitle"
        ></listTitle>
        <div>
          <div 
            v-for="item of leftListData"
            :key="item.id"
            :class="['list-item',item.disabled ? 'disabled' : '']"
          >
          <input 
            type="checkbox"
            :disabled="item.disabled"
            :id="'_checkbox_' + item.id"
            @click="setCheckedData($event.target.checked,  'left' ,item )"
            >
            <label :for="'_checkbox_' + item.id">{{ item.phone_name }}</label>
        </div>
        </div>
      </div>

      <div class="box button-group">
        <button
          :disabled="tranferButtonDisabled.left "
          @click="removeRightListData(checkedData.right)"
        >&lt;</button>
        <button
          :disabled="tranferButtonDisabled.right "
          @click="addRightListData(checkedData.left)"
        >&gt;</button>
      </div>

      <div class="box right-list">
        <listTitle
          :title="rightTitle"
        ></listTitle>
        <div>
          <div 
            v-for="item of rightListData"
            :key="item.id"
            :class="['list-item',item.disabled ? 'disabled' : '']"
          >
          <input 
            type="checkbox"
            :disabled="item.disabled"
            :id="'_checkbox_' + item.id"
            @click="setCheckedData($event.target.checked,  'right' ,item )"
            >
            <label :for="'_checkbox_' + item.id">{{ item.phone_name }}</label>
        </div>
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
        opacity: .7;
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