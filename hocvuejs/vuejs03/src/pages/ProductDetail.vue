<template>
  <h1>{{ product.title }}</h1>
  <img :src="product.image" style="width: 100%" alt="" />
  <p>
    {{ product.description }}
  </p>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const { productId } = route.params;
const product = ref({});
const getProduct = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_API}/products/${productId}`
    );
    product.value = await res.json();
  } catch (error) {
    router.push({ name: "error" });
  }
};
onMounted(getProduct);
</script>
