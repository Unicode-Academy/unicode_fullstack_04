<template>
  <h1>Products</h1>
  <h2 v-if="route.query.keyword">Tìm kiếm: {{ route.query.keyword }}</h2>
  <input type="search" placeholder="Keyword..." @keyup="handleSearch" />
  <hr />
  <ul>
    <li v-for="product in products">
      <NuxtLink :href="`/products/${product.category}/${product.id}`">{{
        product.name
      }}</NuxtLink>
    </li>
  </ul>
  <h2>{{ message }}</h2>
  <button @click="message = 'Ahihi'">Click me</button>
</template>
<script setup>
const message = ref();
const getTodoDetail = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await response.json();
  message.value = data.title;
};
getTodoDetail();
const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    category: "category-1",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    category: "category-1",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    category: "category-1",
  },
];
const route = useRoute();
const handleSearch = (e) => {
  const keyword = e.target.value;
  navigateTo(`?keyword=${keyword}`);
};
watch(
  () => route.query,
  () => {
    console.log(route.query);
  }
);
onMounted(() => {
  console.log(route.query);
});
</script>
