import { ref } from "vue";
import { defineStore } from "pinia";
export const useTodoStore = defineStore("todo", () => {
  const todoList = ref([]);
  const isLoading = ref(true);
  const error = ref(null);
  const getTodos = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      todoList.value = data;
    } catch {
      error.value = "Something went wrong";
    } finally {
      isLoading.value = false;
    }
  };
  return { todoList, getTodos, isLoading, error };
});
