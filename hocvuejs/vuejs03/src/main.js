import { createWebHistory, createRouter } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./configs/routes";
import { getToken } from "./utils/auth";
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
  console.log(1);

  const token = getToken();
  if (token.access_token) {
    to.meta.isLoading = true;
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const user = await response.json();
      to.meta.user = user;
      to.meta.isAuth = true;
    } catch {
      to.meta.isAuth = false;
    } finally {
      to.meta.isLoading = false;
    }
  }
  next();
});

app.use(router).mount("#app");
