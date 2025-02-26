<template>
  <header>
    <h2>Header</h2>
    <RouterLink
      :class="{ active: currentRouteName === 'home' && !firtAccess }"
      :to="{ name: 'home' }"
      >Home</RouterLink
    >
    <RouterLink
      :class="{ active: currentRouteName === 'about' }"
      :to="{ name: 'about' }"
      >About</RouterLink
    >
    <RouterLink
      :class="{
        active:
          currentRouteName === 'products' ||
          currentRouteName === 'products.detail',
      }"
      :to="{ name: 'products' }"
      >Products</RouterLink
    >
    <span v-if="!$route.meta.isLoading && $route.meta.isAuth">
      | Hi, {{ $route.meta.user.name }}
      <RouterLink
        :class="{
          active: currentRouteName === 'profile',
        }"
        :to="{ name: 'profile' }"
        >Profile</RouterLink
      >
      <Logout />
    </span>

    <span v-if="!$route.meta.isLoading && !$route.meta.isAuth">
      <RouterLink
        :class="{
          active: currentRouteName === 'auth.login',
        }"
        :to="{ name: 'auth.login' }"
        >Login</RouterLink
      >
      <RouterLink
        :class="{
          active: currentRouteName === 'auth.register',
        }"
        :to="{ name: 'auth.register' }"
        >Register</RouterLink
      >
    </span>
  </header>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { routerKey, RouterLink, useRoute } from "vue-router";
import Logout from "./Logout.vue";
const route = useRoute();
const firtAccess = ref(true);
watch(
  () => route.name,
  (newValue) => {
    if (newValue !== "home") {
      firtAccess.value = false;
    }
  }
);

const currentRouteName = computed(() => {
  return route.name;
});
</script>
<style scoped>
header a {
  display: inline-block;
  padding: 0 10px;
}
header a.active {
  color: red;
}
</style>
