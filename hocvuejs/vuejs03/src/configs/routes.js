import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Products from "../pages/Products.vue";
import Error from "../pages/Error.vue";
import ProductDetail from "../pages/ProductDetail.vue";
export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/gioi-thieu", name: "about", component: About },
  { path: "/san-pham", name: "products", component: Products },
  {
    path: "/product/:productId",
    name: "products.detail",
    component: ProductDetail,
  },
  { path: "/404", name: "error", component: Error },
  { path: "/:catchAll(.*)", component: Error },
];
