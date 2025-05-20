<template>
  <div class="t-message-overlay" v-if="visible" @click.self="close">
    <div class="t-message-container" :class="`t-message-${position}`">
      <transition name="message-fade">
        <div 
          :class="['t-message', { 'is-closable': showClose, 'with-icon': type }]"
          ref="messageRef"
        >
          <i v-if="type" :class="`t-message__icon el-icon-${typeIcon}`"></i>
          <div class="t-message__content">
            <span>{{ message }}</span>
          </div>
          <button v-if="showClose" class="t-message__close" @click="close">
            <i class="el-icon-close"></i>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { Props } from './message.js';

const props = defineProps(Props);
const emits = defineEmits(['close']);

const visible = ref(true);
const messageRef = ref(null);
let timer = null;

const typeIcon = computed(() => {
  const icons = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };
  return icons[props.type] || 'info';
});

const close = () => {
  visible.value = false;
  emits('close');
};

onMounted(() => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      close();
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

.t-message-container.t-message-top {
  top: 20px;
}

.t-message-container.t-message-bottom {
  bottom: 20px;
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
}

.t-message.with-icon {
  padding-left: 40px;
}

.t-message__icon {
  position: absolute;
  left: 16px;
  font-size: 16px;
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

.t-message__close {
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin-left: 16px;
  cursor: pointer;
  color: #909399;
  transition: color 0.2s;
  font-size: 12px;
}

.t-message__close:hover {
  color: #606266;
}

.t-message.is-closable {
  padding-right: 36px;
}

.t-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}

.t-message--info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}

.t-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}

.t-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
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