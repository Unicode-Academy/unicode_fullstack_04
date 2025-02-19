import { createWebHistory, createRouter } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
const app = createApp(App);

const routes = [
  { path: "/", component: Home },
  { path: "/gioi-thieu", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router).mount("#app");
