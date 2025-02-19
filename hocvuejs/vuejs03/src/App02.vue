<template>
  <div>
    <Usd v-model="usd" />
  </div>
  <div>
    <Vnd v-model:vnda="vnd" v-model:keyword="keyword" />
  </div>
  <h3>{{ keyword }}</h3>
</template>
<script setup>
import { ref, watch } from "vue";
import Usd from "./components/Usd.vue";
import Vnd from "./components/Vnd.vue";
const usd = ref("");
const vnd = ref("");
const keyword = ref("");
watch(usd, (newValue) => {
  vnd.value = newValue * 25000;
});
watch(vnd, (newValue) => {
  usd.value = newValue / 25000;
});
</script>
