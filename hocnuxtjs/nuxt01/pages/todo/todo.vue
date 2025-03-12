<template>
  <h1>Todo List</h1>
  <h3 v-if="pending">Loading...</h3>
  <h3 v-if="error">Đã có lỗi xảy ra</h3>
  <ul>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <!-- <button @click="refresh">Refresh</button> -->
  <TodoAdd />
</template>
<script setup>
import TodoAdd from "./todo-add.vue";
// const { data, pending, error } = useFetch(`http://localhost:3001/todo`);
const { data, pending, error, refresh } = await useAsyncData("todo-list", () =>
  $fetch(`http://localhost:3001/todo`)
);
provide("refreshTodo", refresh);
//Chờ call api thành công --> xử lý tiếp các tác vụ khác
</script>
