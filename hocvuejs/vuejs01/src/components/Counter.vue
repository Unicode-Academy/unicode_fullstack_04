<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <h2 v-if="msg!==''">{{ msg }}</h2>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
    export default {
       data() {
        //state: Trạng thái của component, thể hiện dữ liệu trong nội bộ component
        // Khi state thay đổi --> Giao diện tự động cập nhật
        return {
            count: 0,
            msg: ""
        }
       },
         methods: {
          increment() {
            this.count++;
            if (this.count >= 5) {
                this.msg = "Ok rồi";
            }
          }
         }
    }
</script>