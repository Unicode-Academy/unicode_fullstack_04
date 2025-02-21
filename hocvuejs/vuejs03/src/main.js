import { createWebHistory, createRouter } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./configs/routes";
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router).mount("#app");
