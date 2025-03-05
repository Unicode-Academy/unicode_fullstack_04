import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  //state
  const count = ref(0);

  //action --> function
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  return { count, increment, decrement };
});
