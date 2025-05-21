import {computed, reactive, ref} from 'vue';

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

export function useRightListData(innitialData , checkedData) {
  const rightListData = ref(innitialData);
  function addRightListData(newData) { /**[checkbox,checkbox] */
    rightListData.value = [
      ...rightListData.value,
      ...newData
    ]

    checkedData.left = []
  }

  function removeRightListData(newData) {
    newData.forEach(newItem => {
      rightListData.value = rightListData.value.filter(item => item.id !== newItem.id)
    })

    checkedData.right =[]
  }

  return [rightListData,addRightListData,removeRightListData]

}

export function useCheckedData() {
  const checkedData = reactive({
    left:[],
    right:[]
  });

  function addCheckedData(leftOrRight, item) {
    switch(leftOrRight){
      case 'left':
      checkedData.left.push(item);
      // console.log(checkedData.left);
      
      break;
      case 'right':
      checkedData.right.push(item);
      break
      default:
        break;
    }
  }

  function removeCheckedData(leftOrRight, id) {
    switch(leftOrRight){
      case 'left':
        checkedData.left = checkedData.left.filter(item => item.id !== id);
        // console.log(checkedData.left);
        
      break;
      case 'right':
        checkedData.right = checkedData.right.filter(item => item.id !== id);
      break;
      default:
        break;
    }
  }

  return[
    checkedData,
    addCheckedData,
    removeCheckedData
  ]
}


export function useComputedData(data,targetIndex, rightListData,checkedData){
  const leftTitle = computed(() => data[targetIndex.value].title)

  const leftListData = computed ( () => {
    const {data: currentData} = data[targetIndex.value]

    return currentData.filter(item => {
      if(!rightListData.value.find( ({id}) => id === item.id)){
        return item
      }
    })
  })

  const tranferButtonDisabled = computed ( () => ({
    left: checkedData.right.length === 0,
    right: checkedData.left.length === 0
 }))


  return {
    leftTitle,
    leftListData,
    tranferButtonDisabled
  }
}