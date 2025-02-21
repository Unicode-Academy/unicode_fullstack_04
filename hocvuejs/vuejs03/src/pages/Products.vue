<template>
  <h1>Danh sách sản phẩm</h1>
  <select v-model="sort">
    <option value="desc">Mới nhất</option>
    <option value="asc">Cũ nhất</option>
  </select>
  <h3 v-if="isLoading">Loading...</h3>
  <div class="products">
    <div v-for="product in products">
      <RouterLink
        :to="{ name: 'products.detail', params: { productId: product.id } }"
        ><img :src="product.image" alt=""
      /></RouterLink>
      <h3>
        <RouterLink
          :to="{ name: 'products.detail', params: { productId: product.id } }"
          >{{ product.title }}</RouterLink
        >
      </h3>
      <p>{{ product.price }}$</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
const products = ref([]);
const isLoading = ref(true);
const sort = ref("desc");
const router = useRouter();
const route = useRoute();
watch(sort, (value) => {
  router.push({ query: { sort: value } });
});

watch(
  () => route.query,
  (value) => {
    const sort = value.sort;
    getProducts(sort);
  }
);

const getProducts = async (sort = "desc") => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_API}/products?sort=${sort}`
  );
  products.value = await res.json();
  isLoading.value = false;
};
if (route.query.sort) {
  getProducts(route.query.sort);
}
onMounted(() => {
  if (route.query.sort) return;
  getProducts();
});
</script>
<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
.products img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.products > * {
  flex-basis: calc(100% / 4);
}
</style>
