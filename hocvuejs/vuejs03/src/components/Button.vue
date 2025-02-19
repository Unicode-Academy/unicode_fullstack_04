<template>
    <button @click="handleClick">Click me</button>
    <button @click="$emit('updateName', 'Ok chưa?')">Click me</button>
</template>
<script setup>
const emit = defineEmits(["updateName"]);
const handleClick = () => {
    emit("updateName", "Ok chưa?");
}
</script>