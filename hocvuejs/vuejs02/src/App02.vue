<template>
    <input type="text" placeholder="Vui lòng nhập" v-on:keyup.enter="handleKeyup" v-model="value" />
    <span v-if="msg" style="color: red; display: block;">{{ msg }}</span>
    <!-- <h2 v-if="value">{{ value }}</h2> -->
    <h2>List User</h2>
    <ul v-if="users.length">
        <li v-for="(user, index) in users" :key="index">{{ user }} <button @click="handleEdit(index)">Edit</button>
            <button @click="handleRemove(index)">&times;</button>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            value: "",
            msg: "",
            users: [],
            currentEditIndex: null
        }
    },
    methods: {
        handleKeyup(e) {
            const value = e.target.value;
            if (!value) {
                return this.msg = "Vui lòng nhập dữ liệu";
            }
            this.msg = "";
            // this.value = value;
            if (!this.currentEditIndex) {
                this.users.push(value);
            } else {
                this.users[this.currentEditIndex] = value;
                this.currentEditIndex = null;
            }
            //e.target.value = "";
            this.value = "";
        },

        handleRemove(index) {
            if (confirm("Bạn có chắc chắn muốn xóa?")) {
                this.users.splice(index, 1);
            }
        },

        handleEdit(index) {
            const value = this.users[index];
            this.value = value;
            this.currentEditIndex = index;
        }
    }
}
</script>