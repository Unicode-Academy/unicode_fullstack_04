<template>
  <h1>Chuyên mục</h1>
  <h2>Category: {{ route.params.category }}</h2>
</template>
<script setup>
const route = useRoute();
console.log(route.params);
</script>
