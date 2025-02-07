<script setup>
  import HelloWorld from "./components/HelloWorld.vue";
  import vueImg from "./assets/vue.svg";
  const imgUrl = `https://cdnphoto.dantri.com.vn/KUEGJHQ771xQjEwVCWvaNQvhLMA=/zoom/1032_688/2025/02/07/vang-94-mq-1738887352081.jpg`;
  import Counter from "./components/Counter.vue";
  import Counter2 from "./components/Counter2.vue";
</script>
<template>
  <!-- <h1 class="title">Học VueJS không khó</h1>
  <div>
    <img src="/vite.svg"/>
  </div>
  <div>
    <img v-bind:src="vueImg" alt="">
  </div>
  <div>
    <img :src="imgUrl" alt="">
  </div>
  <HelloWorld msg = "Xin chào anh em" content="Ahihi" /> -->
  <Counter />
  <Counter2 />
</template>