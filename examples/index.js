import { createApp } from "vue";
import App from "./app.vue";
import TButton from "../packages/components/button";
import TSwitch from "../packages/components/switch";
// import TMessage from "../packages/components/message";

const app = createApp(App);
app.use(TButton);
app.use(TSwitch);
app.mount("#app");
