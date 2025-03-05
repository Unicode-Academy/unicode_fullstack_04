<template>
  <h1>Hello World</h1>
  <h2>Count: {{ counterStore.count }}</h2>
</template>
<script setup>
import { useCounterStore } from "../store/counter";
const counterStore = useCounterStore();
</script>
