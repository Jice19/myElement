<template>
  <div class="TInput" :class="{ 'has-suffix': showSuffix }">
    <!-- 输入框主体 -->
    <textarea
      v-if="type === 'textarea'"
      v-model="innerValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      class="TInput-textarea"
      @input="handleInput"
    ></textarea>
    <input
      v-else
      v-model="innerValue"
      :type="showPassword ? (passwordIsVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      class="TInput-inner"
      @input="handleInput"
    />
    
    <!-- 后缀图标区域 -->
    <div v-if="showSuffix" class="TInput-suffix">
      <!-- 清除按钮 -->
      <span
        v-if="clearable && innerValue"
        class="TInput-clear"
        @click="clearInput"
      >
        <i>X</i>
      </span>
      
      <!-- 密码可见性切换 -->
      <span
        v-if="showPassword && innerValue" 
        class="TInput-password"
        @click="PasswordVisibility"
      >
        <i>👀</i>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from 'vue';

// 定义组件属性
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: value => ['text', 'password', 'number', 'textarea'].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 3,
    validator: value => value >= 1
  }
});

// 定义组件事件
const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'keydown']);

// 内部值
const innerValue = ref(props.modelValue);

// 密码可见性
const passwordIsVisible = ref(false);

// 监听外部值变化
watch(() => props.modelValue, (newVal) => {
  innerValue.value = newVal;
});

// 监听内部值变化并更新
watch(innerValue, (newVal) => {
  emits('update:modelValue', newVal);
});

// 处理输入事件
const handleInput = (event) => {
  innerValue.value = event.target.value;
};

// 清除输入内容
const clearInput = () => {
  innerValue.value = '';
  emits('update:modelValue', '');
};

// 切换密码可见性
const PasswordVisibility = () => {
  passwordIsVisible.value = !passwordIsVisible.value;
};

// 计算是否显示后缀图标
const showSuffix = computed(() => {
  return props.clearable || props.showPassword;
});
</script>

<style scoped>
.TInput {
  position: relative;
  display: inline-block;
  width: 500px;
  font-size: 14px;
}

.TInput-inner,
.TInput-textarea {
  width: 100%;
  height: 40px;
  line-height: 1.5;
  padding: 8px 12px;
  color: #606266;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.TInput-textarea {
  height: auto;
  min-height: 80px;
  resize: vertical;
}

.TInput-inner:focus,
.TInput-textarea:focus {
  outline: none;
  border-color: #409eff;
}

.TInput-inner:disabled,
.TInput-textarea:disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.TInput.has-suffix .TInput-inner {
  padding-right: 32px;
}

.TInput-suffix {
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  line-height: 40px;
  color: #c0c4cc;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
}

.TInput-suffix i {
  font-size: 14px;
  transition: color 0.2s;
}

.TInput-suffix:hover i {
  color: #606266;
}

.TInput-clear,
.TInput-password {
  padding: 0 4px;
}
</style>