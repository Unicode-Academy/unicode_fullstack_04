<template>
  <h1>Xin chào</h1>
  <!-- <NuxtLink href="/todo">Danh sách công việc</NuxtLink> -->
  <a href="/todo">Danh sách</a>
  <button @click="handleClick">Open Todo</button>
</template>
<script setup>
const handleClick = () => {
  navigateTo(`/todo`);
};
</script>
