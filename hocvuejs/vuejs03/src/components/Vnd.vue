<template>
  <input type="number" placeholder="Vnd" v-model="vndModel" />
  <div>
    <input v-model="keywordModel" type="text" placeholder="Tìm kiến..." />
  </div>
</template>
<script setup>
const vndModel = defineModel("vnda");
const keywordModel = defineModel("keyword");
</script>
