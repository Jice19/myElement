import { createApp } from "vue";
import App from "./app.vue";
import TButton from "../packages/components/button";
import TSwitch from "../packages/components/switch";
import TTransfer from "../packages/components/transfer";

const app = createApp(App);
app.use(TButton);
app.use(TSwitch);
app.use(TTransfer);
app.mount("#app");
