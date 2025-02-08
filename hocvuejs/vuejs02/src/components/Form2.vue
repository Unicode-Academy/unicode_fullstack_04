<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" v-model="form.email" />
            <div v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" v-model="form.password" />
            <div v-if="errors.password">{{ errors.password }}</div>
        </div>
        <button :disabled="!isValid">Login</button>
    </form>
    <button @click="count++">Count: {{ count }}</button>
    <p>{{ fullName }}</p>
</template>
<script setup>
import { reactive, ref, watch, computed, onMounted, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue';
const form = reactive({
    email: '',
    password: ''
});
const errors = reactive({
    email: '',
    password: ''
});
const isValid = ref(false);
const count = ref(0);
const handleSubmit = () => {
    const { email, password } = form;
    errors.email = "";
    errors.password = "";
    if (!email) {
        errors.email = "Email is required";
    }
    if (!password) {
        errors.password = "Password is required";
    }
}
watch(form, ({ email, password }) => {
    if (email && password) {
        isValid.value = true;
    } else {
        isValid.value = false;
    }
})
const fullName = computed(() => {
    console.log('Fullname');

    const { email, password } = form;
    if (email && password) {
        return `${email} - ${password}`;
    }
})

onBeforeMount(() => {
    console.log('Before Mount');
})

onMounted(() => {
    console.log('Mounted');
})

onBeforeUpdate(() => {
    console.log('Before Update');
})

onUpdated(() => {
    console.log('Updated');
})

</script>