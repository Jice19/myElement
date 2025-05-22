import { createApp } from "vue";
import App from "./app.vue";
import TButton from "../packages/components/button";
import TSwitch from "../packages/components/switch";
import TTransfer from "../packages/components/transfer";
import Tinput from '../packages/components/input'

const app = createApp(App);
app.use(TButton);
app.use(TSwitch);
app.use(TTransfer);
app.use(Tinput)
app.mount("#app");
