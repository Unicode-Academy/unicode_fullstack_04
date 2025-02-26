<template>
  <a href="#" @click.prevent="handleLogout">Logout</a>
</template>
<script setup>
import { useRouter } from "vue-router";
import { removeToken } from "../../utils/auth";
const router = useRouter();
const handleLogout = () => {
  if (confirm("Chắc chưa?")) {
    removeToken();
    router.push({ name: "auth.login" });
  }
};
</script>
