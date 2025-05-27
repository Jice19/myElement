// packages/components/index.js
import { components } from './components';
import "@test-ui/theme-chalk/index.less";

const FUNCTION_COMP = ["TMessage"];

export default {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      // 使用组件自身的 name 选项进行注册，而不是变量名
      if (!FUNCTION_COMP.includes(name)) {
        app.component(component.name || name, component);
      }
    });
    
    // 特殊处理函数式组件（如 TMessage）
    app.config.globalProperties.$message = components.TMessage;
  }
};