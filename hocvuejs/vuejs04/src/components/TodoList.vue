<template>
  <h2>TodoList</h2>
  <h3 v-if="todoStore.isLoading">Loading...</h3>
  <h3 v-if="todoStore.error">{{ todoStore.error }}</h3>
  <ul>
    <li v-for="todo in todoStore.todoList" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
<script setup>
import { useTodoStore } from "../store/todo";
const todoStore = useTodoStore();
</script>
