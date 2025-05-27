import { createApp } from "vue";
import App from "./app.vue";
// import TestUI from  '@test-ui/components' 
import TestUI from "../dist/es.js";
import "../dist/style.css"

/**
 * 首先组件库 样式表 Icon库
 * //  --》 component
 * //  --》 style
 * //  --》 icon 
 */

const app = createApp(App);

app.use(TestUI);
app.mount("#app");
