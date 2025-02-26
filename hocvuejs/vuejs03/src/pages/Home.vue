<template>
  <h1>Trang chủ</h1>

  <!-- <button v-if="!isLoading && !isAuth" @click="handleGoogLogin">
    Login Google
  </button>
  <div v-if="!isLoading && isAuth">
    <h2>Chào bạn: {{ user.fullname }}</h2>
    <button @click="handleLogout">Logout</button>
  </div> -->
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// const isAuth = ref(false);
// const isLoading = ref(true);
// const user = ref({});
// const handleGoogLogin = () => {
//   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
//   const redirectUri = import.meta.env.VITE_GOOGLE_CALLBACK;
//   const urlRedirect = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email+profile&access_type=offline`;
//   window.location.href = urlRedirect;
// };
// const route = useRoute();
// const router = useRouter();
// const loginGoogle = async (accessToken) => {
//   const res = await fetch(`http://localhost:3000/auth/social/google`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ access_token: accessToken }),
//   });
//   const data = await res.json();
//   if (data.access_token) {
//     localStorage.setItem("access_token", data.access_token);
//   }
// };
// const getProfile = async () => {
//   const accessToken = localStorage.getItem("access_token");
//   if (accessToken) {
//     try {
//       const res = await fetch(`http://localhost:3000/auth/profile`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       if (!res.ok) {
//         throw new Error("Error");
//       }
//       const data = await res.json();
//       if (data) {
//         isAuth.value = true;
//         user.value = data;
//       }
//     } catch {}
//   }
//   isLoading.value = false;
// };
// const handleLogout = async () => {
//   const accessToken = localStorage.getItem("access_token");
//   if (accessToken) {
//     await fetch(`http://localhost:3000/auth/logout`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     localStorage.removeItem("access_token");
//   }
//   isAuth.value = false;
//   user.value = {};
// };

// onMounted(() => {
//   getProfile();
//   const code = route.query.code;
//   if (!code) {
//     return;
//   }
//   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
//   const clientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;
//   const redirectUri = import.meta.env.VITE_GOOGLE_CALLBACK;
//   const getAccessToken = async () => {
//     const res = await fetch(`https://oauth2.googleapis.com/token`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         code,
//         client_id: clientId,
//         redirect_uri: redirectUri,
//         client_secret: clientSecret,
//         grant_type: "authorization_code",
//       }),
//     });
//     const data = await res.json();
//     if (data.access_token) {
//       const accessToken = data.access_token;
//       await loginGoogle(accessToken);
//       await getProfile();
//       router.push("/");
//     }
//   };
//   getAccessToken();
// });

/*
1. Lấy Authentication Code

GET https://accounts.google.com/o/oauth2/v2/auth

Params:

- client_id: CLIENT ID cua ban
- redirect_uri: Link Callback
- response_type: code
- scope: email profile
- access_type: offline

2. Lấy Access Token

POST https://oauth2.googleapis.com/token

Body:

- code: Code lấy từ bước trên
- client_id: CLIENT ID cua ban
- client_secret: SECRET cua ban
- redirect_uri: Link Callback
- grant_type: authorization_code

3. Lấy user từ access token

POST https://www.googleapis.com/oauth2/v1/userinfo?access_token={access_token}
*/
</script>
