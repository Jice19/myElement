import DefaultTheme from "vitepress/theme";
import TestUI from "@test-ui/components";
import "@test-ui/theme-chalk/index.less"; // 引入样式文件

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(TestUI);
  },
};
