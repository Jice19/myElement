import * as components from "./components";

// components 是一个对象，包含了所有的组件
// 这里的 install 方法是 Vue 的插件安装方法
export default {
  install(app) {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
