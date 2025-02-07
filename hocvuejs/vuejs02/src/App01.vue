<template>
  <h1>Hello World</h1>
  <input type="text" placeholder="Vui lòng nhập" v-model="message" />
  <button @click="reset">Reset</button>
  <h2>Dữ liệu: {{ message }}</h2>
</template>
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    reset() {
      this.message = "Unicode";
    }
  }
}
</script>