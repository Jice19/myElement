<template>
  <div>
    <h1>按钮组件展示</h1>
    <ul>
      <li>颜色：
        <my-button>默认</my-button>
        <my-button type="primary">primary</my-button>
        <my-button type="success">success</my-button>
        <my-button type="info" >info</my-button>
        <my-button type="warning">success</my-button>
        <my-button type="danger">danger</my-button>
        <my-button disabled>禁用</my-button>
      </li>
      <li>大小：
        <my-button size="small">small</my-button>
        <my-button size="medium">medium</my-button>
        <my-button size="large">large</my-button>
      </li>
      <li>朴素按钮：
        <my-button plain>plain</my-button>
        <my-button type="primary" plain>primary</my-button>
        <my-button type="success" plain>success</my-button>
        <my-button type="info" plain>info</my-button>
        <my-button type="warning" plain>success</my-button>
        <my-button type="danger" plain>danger</my-button>
      </li>
    </ul>

    <h1>Switch组件展示</h1>
      <ul>
        <li>默认状态(触发事件控制台)：
          <my-Switch v-model="isOpen" @change="handleChange" />
        </li>
        <li>自定义速度：
          <my-Switch v-model="isOpen" :speed="2000"  />
        </li>
        <li>自定义标签文本：
          <my-Switch v-model="isOpen" labelChecked="开启" labelUnchecked="关闭"  />
        </li>
        <li>自定义颜色：
          <my-Switch v-model="isOpen" colorChecked="#ff0000" colorUnchecked="#0000ff"  />
        </li>
      </ul>

      <h1>Input组件展示</h1>
      <ul>
          <h3>基础输入框</h3>
          <TInput v-model="message" placeholder="请输入内容" />
          <h3>密码输入框</h3>
          <TInput v-model="password" type="password" showPassword placeholder="请输入密码"  />
          <h3>带清除功能的输入框</h3>
          <TInput v-model="searchText"  clearable placeholder="搜索内容" />
          <h3>文本域</h3>
          <TInput v-model="description"  type="textarea"  rows="5" placeholder="请输入描述信息"  />
          <h3>禁用状态</h3>
          <TInput v-model="disabledText" disabled placeholder="禁用状态" />
          <h3>数值输入框</h3>
          <TInput v-model.number="age" type="number"  placeholder="请输入年龄"  />
      </ul>


      <h1>Message全局提示组件展示</h1>
      <ul>
        <li>成功提示：
          <my-button type="success"  @click="handleMessage">success</my-button>
        </li>
        <li>失败提示：
          <my-button type="danger"  @click="handleMessageError">danger</my-button>
        </li>
      </ul>

      <h1>Transfer组件展示</h1>
      <TTransfer
        :data="data"
        rightTitle="已选择机型"
      ></TTransfer>
    </div>
</template>
<script setup>
import { ref } from "vue";
// import { TMessage } from "@test-ui/components";
// import TTransfer from "@test-ui/components/transfer";
// import TInput from "@test-ui/components/input";

// switch开始
const isOpen = ref(true);
const handleChange = (value) => {
  // 触发事件
  console.log("Switch状态:", value);
};
// switch结束


// message开始
const handleMessage = () => {
  TMessage({
    type: "success",
    message: "操作成功",
  });
};

const handleMessageError = () => {
  TMessage({
    type: "error",
    message: "操作失败",
  });
};
// message结束


// TTransfer开始
// 声明数据
const data = [
  {
    title:'华为',
    data:[
      {
        id:1,
        phone_name:'Mate 50',
        disabled:false
      },
      {
        id:2,
        phone_name:'Mate 60',
        disabled:false
      },
      {
        id:3,
        phone_name:'Mate 70',
        disabled:true
      },
      {
        id:4,
        phone_name:'Mate 80',
        disabled:false
      },
      {
        id:5,
        phone_name:'Mate 90',
        disabled:false
      },
      {
        id:6,
        phone_name:'Mate 100',
        disabled:true
      }
    ]
  },{
    title:'小米',
    data:[
      {
        id:7,
        phone_name:'小米 13',
        disabled:false
      },{
        id:8, 
        phone_name:'小米 14',
        disabled:false
      },
      {
        id:9,
        phone_name:'小米 15',
        disabled:true
      }
    ]
  },
  {
    title:'苹果',
    data:[
      {
        id:10,
        phone_name:'iPhone 14',
        disabled:false
      },{
        id:11,
        phone_name:'iPhone 15', 
        disabled:false
      },{
        id:12,
        phone_name:'iPhone 16',
        disabled:true
      },{
        id:13,
        phone_name:'iPhone 17',
        disabled:false
      },
      {
        id:14,
        phone_name:'iPhone 18',
        disabled:false
      }
    ]
  }
]
// TTransfer结束


// Tinpurt开始
const message = ref('');
const password = ref('');
const searchText = ref('');
const description = ref('');
const disabledText = ref('禁用内容');
const age = ref(19);
// Tinput结束
</script>

<style scoped>
li {
  margin-bottom: 10px; /* 设置每个li元素之间的间距 */
}
</style>


