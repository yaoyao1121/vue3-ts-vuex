import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import '/@/assets/styles/reset.scss'
import {setupStore} from "/@/store";

const app = createApp(App);
//配置vuex存储
setupStore(app);
// app.config.globalProperties.$http = (name) => `my name is ${name}`
app.use(ElementPlus).use(router);
app.mount("#app");
