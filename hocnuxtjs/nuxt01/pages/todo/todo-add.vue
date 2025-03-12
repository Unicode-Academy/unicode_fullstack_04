<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Tên..." v-model="title" />
    <button>Thêm</button>
  </form>
  {{ msg }}
</template>
<script setup>
import { useNuxtApp } from "#app";
const title = ref("");
const msg = ref("");
const refreshTodo = inject("refreshTodo");

const handleSubmit = async () => {
  const { data } = await useFetch(`http://localhost:3001/todo`, {
    method: "POST",
    body: { title },
  });
  msg.value = `Đã thêm: ${data.value.title}`;
  refreshTodo();
  title.value = "";
};
</script>
