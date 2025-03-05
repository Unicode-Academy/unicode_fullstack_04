import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useCounterStore } from "./store/counter";
const pinia = createPinia();

const app = createApp(App).use(pinia);
const counterStore = useCounterStore();
console.log(counterStore.count);
app.mount("#app");
