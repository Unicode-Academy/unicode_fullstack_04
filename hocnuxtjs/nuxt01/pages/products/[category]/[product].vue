<template>
  <h1>Chi tiết sản phẩm</h1>
  <h2>ID: {{ route.params.product }}</h2>
  <h2>Category: {{ route.params.category }}</h2>
</template>
<script setup>
const route = useRoute();
console.log(route.params);
</script>
