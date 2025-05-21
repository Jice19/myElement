<template>
  <div class="t-message-overlay" v-if="visible" @click.self="close">
    <div class="t-message-container">
        <div 
          :class="['t-message', `t-message-${context.type}`]"
          ref="messageRef"
        >
          <div class="t-message__content">
            <span>{{ context.message }}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, toRefs } from 'vue';
import { Props } from './message.js';

const props = defineProps(Props);
const emits = defineEmits(['close']);
const visible = ref(true);
const messageRef = ref(null);
let timer = null;
const context = ref({
  type: '',
  message: '',
  duration: 3000,
  onClose: () => {}
})

onMounted(() => {
  const { type, message, onClose } = toRefs(props);
  context.value = {
    type: type.value,
    message: message.value,
    duration: props.duration,
    onClose: onClose.value
  };
  // console.log(props)
  if (props.duration > 0) {
    timer = setTimeout(() => {
      context.value.onClose();
    }, props.duration);
  }
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<style scoped>
.t-message-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2000;
}

.t-message-container {
  position: fixed;
  width: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.t-message {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 0 auto 16px;
  width: fit-content;
  max-width: 90%;
  min-width: 300px;
  pointer-events: all;
  transition: opacity 0.3s, transform 0.4s;
  position: relative;
  border-width: 1px;
  border-style: solid;

  &.t-message-success {
    background-color: #67c23a;
    opacity: .5;
  }
  &.t-message-info {
    background-color: #909399;
    opacity: .5;
  }
  &.t-message-warning {
    background-color: #e6a23c;
    opacity: .5;
  }
  &.t-message-error {
    background-color: #f56c6c;
    opacity: .5;
  }
}

.t-message__content {
  flex: 1;
  min-width: 0;
}

.t-message__content span {
  font-size: 14px;
  line-height: 1.5;
  word-break: break-all;
}

.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.3s, transform 0.4s;
}
</style>  