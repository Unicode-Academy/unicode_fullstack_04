<template>
    <h1>Học lập trình không khó</h1>
    <HelloWorld :name="fullname" />
    <Button @updateName="handleChange" />
</template>
<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';
const fullname = ref("Hoàng An Unicode");
const handleChange = (newName) => {
    fullname.value = newName;
}
</script>