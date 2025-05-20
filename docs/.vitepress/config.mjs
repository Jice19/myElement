import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Jice19-Elements",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "组件", link: "/components/button/" },
    ],

    sidebar: {
      "/components/": [
        {
          text: "基本",
          items: [
            // 类似路由进行跳转
            { text: "Button 按钮", link: "/components/button/" },
            // { text: "Icon 图标", link: "/components/icon/" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
