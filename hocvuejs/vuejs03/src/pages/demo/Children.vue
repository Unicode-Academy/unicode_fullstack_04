<template>
  <h2>Children</h2>
  <h3>{{ message }}</h3>
  <button @click="updateMessageChilren">Update Message Children</button>
  <button @click="updateFullname">Update Fullname: {{ fullname }}</button>
  <Content />
</template>
<script setup>
import { inject } from "vue";
import Content from "./Content.vue";
const message = inject("message");
const updateMessageChilren = () => {
  message.value = "Bhihi";
};
const { fullname, updateFullname } = inject("customer");
</script>
