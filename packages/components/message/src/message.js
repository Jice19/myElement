export const Props = {
  type: {
    type: String,
    default: 'info',
    validator(value) {
      return ['success', 'info', 'warning', 'error'].includes(value);
    }
  },
  message: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3000
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom'].includes(value);
    }
  }
};