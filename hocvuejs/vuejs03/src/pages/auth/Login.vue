<template>
  <h1>Login</h1>
  <form @submit.prevent="handlLogin">
    <div>
      <label for="">Email</label>
      <input type="email" placeholder="Email..." v-model="email" required />
    </div>
    <div>
      <label for="">Password</label>
      <input
        type="password"
        placeholder="Password..."
        v-model="password"
        required
      />
    </div>
    <button>Login</button>
  </form>
  <p v-if="msg">{{ msg }}</p>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { saveToken } from "../../utils/auth";
import { instance } from "../../configs/axios";
const email = ref("");
const password = ref("");
const msg = ref("");
const router = useRouter();
const handlLogin = async () => {
  const response = await instance.post(`/auth/login`, {
    email: email.value,
    password: password.value,
  });
  if (response.status === 201) {
    const data = response.data;
    //Lưu vào localStorage
    saveToken(data);
    router.push({ name: "home" });
  } else {
    msg.value = "Email hoặc mật khẩu không chính xác";
  }
};
</script>
