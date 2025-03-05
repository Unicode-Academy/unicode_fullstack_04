<template>
  <h1>Demo</h1>
  <h2>{{ message }}</h2>
  <button @click="updateMessage">Change Message</button>
  <Children />
</template>
<script setup>
import { ref, provide } from "vue";
import Children from "./Children.vue";
const message = ref("Hello AE");
const fullname = ref("Hoàng An");
provide("message", message);
provide("customer", {
  fullname,
  updateFullname: function () {
    console.log("Update fullname");
    fullname.value = "Hoàng An Unicode";
  },
});
const updateMessage = () => {
  message.value = "Ahihi";
};
</script>
