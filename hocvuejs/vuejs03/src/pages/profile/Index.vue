<template>
  <h1>Profile</h1>
  <h2></h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
    atque minima quo quia sit, eum laboriosam dolore incidunt? Incidunt magnam
    fuga qui impedit sequi aspernatur dolores, molestias illum expedita debitis!
  </p>
</template>
<script setup>
import { onMounted } from "vue";
import { instance } from "../../configs/axios";
const getUser = async () => {
  //Lấy access token --> call api
  const response = await instance.get(`/auth/profile`);
  console.log(response.data);
};
onMounted(getUser);
</script>
