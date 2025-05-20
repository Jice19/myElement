import DefaultTheme from "vitepress/theme";
import TestUI from "@test-ui/components";
import "@test-ui/theme-chalk/index.less"; // 引入样式文件
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(TestUI);
    app.use(hljsVuePlugin);
  },
};
