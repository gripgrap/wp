import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"
const app = createApp(App);
app.use(router);             // 라우팅
app.use(store);
app.mount("#app");       // 마운팅
