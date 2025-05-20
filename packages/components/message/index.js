import Message from "./src/message.vue";
import { h, render } from "vue";

let currentMessage = null;
let closeTimer = null;

// 重置关闭定时器
const resetCloseTimer = (duration) => {
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => {
    closeCurrentMessage();
  }, duration);
};

// 关闭当前消息
const closeCurrentMessage = () => {
  if (!currentMessage) return;
  
  // 添加关闭动画
  currentMessage.container.style.opacity = '0';
  currentMessage.container.style.transform = 'translateY(-10px)';
  
  setTimeout(() => {
    if (currentMessage.container && currentMessage.container.parentNode) {
      currentMessage.container.parentNode.removeChild(currentMessage.container);
    }
    currentMessage = null;
  }, 300); // 动画持续时间
};

// 创建或更新消息
const createOrUpdateMessage = (config) => {
  const duration = config.duration || 3000;
  
  // 如果已有消息，更新内容和样式
  if (currentMessage) {
    // 更新消息内容
    if (currentMessage.vnode.component) {
      currentMessage.vnode.component.props.message = config.message;
      currentMessage.vnode.component.props.type = config.type;
    }
    
    // 重置样式（用于恢复可能已触发的关闭动画）
    currentMessage.container.style.opacity = '1';
    currentMessage.container.style.transform = 'translateY(0)';
    
    // 重置关闭定时器
    resetCloseTimer(duration);
    return;
  }
  
  // 创建新消息
  const vnode = h(Message, {
    ...config,
    // 手动关闭时的回调
    onClose: closeCurrentMessage
  });
  
  const container = document.createElement("div");
  container.className = "t-message-container";
  container.style.cssText = `
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    min-width: 300px;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s, transform 0.3s;
  `;
  
  document.body.appendChild(container);
  render(vnode, container);
  
  // 存储当前消息引用
  currentMessage = { vnode, container };
  
  // 触发显示动画
  setTimeout(() => {
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 10);
  
  // 设置关闭定时器
  resetCloseTimer(duration);
};

// 防抖处理：短时间内多次调用只触发最后一次
const debouncedCreateMessage = (() => {
  let timer = null;
  return (config) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      createOrUpdateMessage(config);
    }, 50); // 防抖延迟，可根据需要调整
  };
})();

// 主函数
export const TMessage = (config = {}) => {
  const defaultConfig = {
    type: 'info',
    message: '',
    duration: 3000,
    showClose: true,
    ...config
  };
  
  debouncedCreateMessage(defaultConfig);
};

// 添加快捷方法
['success', 'info', 'warning', 'error'].forEach(type => {
  TMessage[type] = (message, options = {}) => {
    return TMessage({
      type,
      message,
      ...options
    });
  };
});

export default TMessage;  