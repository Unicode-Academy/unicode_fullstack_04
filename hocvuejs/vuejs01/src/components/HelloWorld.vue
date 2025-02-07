<script setup>
    // const props = defineProps(['msg', 'content']); //Trả về 1 object chứa các props
    // console.log(props);
    defineProps(['msg']); //Tự động tạo ra biến cùng tên với props
</script>
<template>
    <div>
        <h2>Hello World: {{ msg }}</h2>
    </div>
</template>