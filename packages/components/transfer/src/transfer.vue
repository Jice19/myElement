<script setup>
// 在这里编写组件逻辑
import selector from './components/selector.vue'
import listTitle from './components/listTitle.vue'
import PropsDefination from './transfer.js'
import listItem from './components/listItem.vue'
import {useTargetIndex ,
        useComputedData , 
        useRightListData, 
        useCheckedData,
        useDragedItem
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

const [
        dragedItem,
        setDragedItem
      ] = useDragedItem([])

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
      <div
       class="box left-list"
      @dragover.prevent
      @dragend="addRightListData([dragedItem])">
        <listTitle
          :title="leftTitle"
          :dragedItem="setDragedItem"
        ></listTitle>
        <div>
          <listItem
            :data="leftListData"
            :leftOrRight="'left'"
            @checkboxClick="setCheckedData"
            @dragItem="setDragedItem"
          ></listItem>
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

      <div 
      class="box right-list"
      @dragover.prevent
      @dragend="removeRightListData([dragedItem])"
      >
        <listTitle
          :title="rightTitle"
          :dragedItem="setDragedItem"
        ></listTitle>
        <div>
          <listItem
            :data="rightListData"
            :leftOrRight="'right'"
            @checkboxClick="setCheckedData"
            @dragItem="setDragedItem"
          ></listItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 在这里编写组件样式 */


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