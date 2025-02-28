import { createWebHistory, createRouter } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./configs/routes";
import { getToken } from "./utils/auth";
import { instance } from "./configs/axios";
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuth = false;
//   if (to.meta.requiresAuth) {
//     if (isAuth) {
//       console.log(`Đang chuyển hướng đến: ${to.path}`);
//       next(); //Chuyển đến route tương ứng
//     } else {
//       console.log("Chuẩn bị chuyển hướng đến: " + to.path);
//       next({
//         name: "auth.login",
//       });
//     }
//   } else {
//     console.log(`Đang chuyển hướng đến: ${to.path}`);
//     next();
//   }
// });

// router.afterEach((to, from) => {
//   console.log(`Đã chuyển hướng đến ${to.path}`);
//   if (to.name === "products") {
//     document.title = "Sản phẩm";
//   }
// });

router.beforeEach(async (to, from, next) => {
  try {
    const response = await instance.get(`/auth/profile`);
    const user = response.data;
    to.meta.user = user;
    to.meta.isAuth = true;
  } catch (error) {
    to.meta.isAuth = false;
  } finally {
    to.meta.isLoading = false;
  }
  next();
});

app.use(router).mount("#app");
