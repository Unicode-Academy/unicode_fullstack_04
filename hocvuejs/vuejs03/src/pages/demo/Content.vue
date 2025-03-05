<template>
  <h2>Content</h2>
  <h3>{{ message }}</h3>
  <h3>{{ messageContent }}</h3>
  <button @click="messageContent = 'Content Update'">Update My Message</button>
</template>
<script setup>
import { inject, onMounted, ref } from "vue";
const message = inject("message");
const messageContent = ref();
console.log(messageContent.value);
onMounted(() => {
  console.log("component được mounted");

  messageContent.value = message;
});
</script>
