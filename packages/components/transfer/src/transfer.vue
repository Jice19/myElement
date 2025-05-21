<script setup>
// 在这里编写组件逻辑
import PropsDefination from './transfer.js'
import {useTargetIndex ,useComputedData} from './hooks.js'
const props = defineProps(PropsDefination)
// 成功获取数据
// console.log(props.data, props.rigehtTitle)
const options = props.data.map(({title}) => title)
const [targetIndex, setTargetIndex] = useTargetIndex(0)
const {leftTitle} = useComputedData(props.data, targetIndex)

</script>

<template>
  <div>
    <div>
      <select
        @change="setTargetIndex($event.target.value)"
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

      </div>
      <div class="box button-group"></div>
      <div class="box right-list"></div>
    </div>
  </div>
</template>

<style scoped>
/* 在这里编写组件样式 */
</style>