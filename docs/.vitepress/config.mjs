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
          items: [{ text: "Button 按钮", link: "/components/button/" }],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
