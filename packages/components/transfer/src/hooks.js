import {computed, ref} from 'vue';

export function useTargetIndex(initialIndex){
  const targetIndex = ref(initialIndex);

  function setTargetIndex(newIndex){
    targetIndex.value = Number(newIndex);
    // 成功打印index标识
    // console.log(targetIndex.value);
  }

  return [
    targetIndex,
    setTargetIndex
  ]
}

export function useComputedData(data,targetIndex){
  const leftTitle = computed(() => data[targetIndex.value].title)

  return {
    leftTitle
  }
}