<template>
  <div class="main-layout">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<style scoped>
.main-layout {
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
}
</style>
<script setup>
import Header from "./partials/Header.vue";
import Footer from "./partials/Footer.vue";
</script>
