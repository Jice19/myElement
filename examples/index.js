import { createApp } from "vue";
import App from "./app.vue";
import TButton from "../packages/components/button";

const app = createApp(App);
app.use(TButton);
app.mount("#app");
