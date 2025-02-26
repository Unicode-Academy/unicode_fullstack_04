import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Products from "../pages/Products.vue";
import Error from "../pages/Error.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import ProfileIndex from "../pages/profile/Index.vue";
import Register from "../pages/auth/Register.vue";
import Login from "../pages/auth/Login.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import { GuestMiddleware } from "../middlewares/GuestMiddleware";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/gioi-thieu", name: "about", component: About },
  { path: "/san-pham", name: "products", component: Products },
  {
    path: "/product/:productId",
    name: "products.detail",
    component: ProductDetail,
  },
  {
    path: "/auth",
    component: AuthLayout,
    beforeEnter: GuestMiddleware,
    children: [
      {
        path: "login",
        name: "auth.login",
        component: Login,
      },
      {
        path: "register",
        name: "auth.register",
        component: Register,
      },
    ],
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileIndex,
    beforeEnter: AuthMiddleware,
    // meta: {
    //   requiresAuth: true,
    // },
    // beforeEnter: (to, from, next) => {
    //   // console.log(`Đang chuyển hướng đến: ${to.path}`);
    //   // next();
    // },
  },
  { path: "/404", name: "error", component: Error },
  { path: "/:catchAll(.*)", component: Error },
];
