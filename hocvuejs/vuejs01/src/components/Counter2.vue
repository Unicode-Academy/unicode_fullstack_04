<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <button @click="handleIncrment">Increment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const handleIncrment = () => {
    count.value++;
}
</script>
