<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'success', 'info', 'warning', 'danger'].includes(value);
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      }
    },
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
    plain: Boolean 
  },
  computed: {
    buttonClasses() {
      return [
        'my-button',
        `my-button--${this.type}`,
        `my-button--${this.size}`,
        { 'is-round': this.round },
        { 'is-circle': this.circle },
        { 'is-plain': this.plain }
      ];
    }
  }
};
</script>

<style scoped>
.my-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}
.my-button--default {
  background-color: #f0f0f0;
  color: #333;
}
.my-button--primary {
  background-color: #409EFF;
  color: #fff;
}
.my-button--success {
  background-color: #67C23A;
  color: #fff;
}
.my-button--info {
  background-color: #909399;
  color: #fff;
}
.my-button--warning {
  background-color: #E6A23C;
  color: #fff;
}
.my-button--danger {
  background-color: #F56C6C;
  color: #fff;
}
.my-button--small {
  padding: 6px 12px;
}
.my-button--large {
  padding: 14px 28px;
}
.is-round {
  border-radius: 20px;
}
.is-circle {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
}
.my-button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}
.is-plain { 
  background-color: transparent;
  color: #333;
  border: 1px solid #dcdcdc;
}
.is-plain:hover {
  background-color: #f0f0f0;
}
.is-plain:active {
  background-color: #e0e0e0;
}
</style>
