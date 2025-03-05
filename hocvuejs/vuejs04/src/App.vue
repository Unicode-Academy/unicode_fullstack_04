<template>
  <h1>Pinia: {{ count }}</h1>
  <button @click="decrement">-</button>
  <button @click="increment">+</button>
  <HelloWorld />
  <TodoList />
</template>
<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { useCounterStore } from "./store/counter";
import { useTodoStore } from "./store/todo";
import TodoList from "./components/TodoList.vue";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { increment, decrement } = store;

const todoStore = useTodoStore();
onMounted(todoStore.getTodos);
</script>
