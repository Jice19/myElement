export const Props = {
  type: {   /** 非必须传入 **/
    type: String,
    default: 'info',
    validator(value) {
      return ['success', 'info', 'warning', 'error', "danger"].includes(value);
    },
    required: false
  },
  message: {   /** 非必须传入 **/
    type: String,
    default: '',
    required: false
  },
  duration: {  /** 非必须传入 **/
    type: Number,
    default: 3000,
    required: false
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom'].includes(value);
    }
  },
  onClose: {  /** 必须传入 **/
    type: Function,
    required: true
  }
};