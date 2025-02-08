<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" v-model="form.email" />
            <span v-if="errors.email">{{ errors.email }}</span>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" v-model="form.password" />
            <span v-if="errors.password">{{ errors.password }}</span>
        </div>
        <button :disabled="!isValid">Login</button>
    </form>
    <button @click="count++">Count: {{ count }}</button>
    <p>{{ fullName }}</p>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            },
            isValid: false,
            count: 0
        }
    },
    methods: {
        handleSubmit() {
            const { email, password } = this.form;
            this.errors = {
                email: '',
                password: ''
            }
            if (!email) {
                this.errors.email = 'Email is required';
            }
            if (!password) {
                this.errors.password = 'Password is required';
            }
        },
        // fullName() {
        //     console.log('fullName');

        //     const { email, password } = this.form;
        //     if (email && password) {
        //         return `${email} - ${password}`;
        //     }
        // }
    },
    computed: {
        fullName() {
            console.log('fullName');

            const { email, password } = this.form;
            if (email && password) {
                return `${email} - ${password}`;
            }
        }
    },
    watch: {
        form: {
            handler({ email, password }) {
                if (email && password) {
                    this.isValid = true;
                } else {
                    this.isValid = false;
                }
            },
            deep: true //Bắt buộc khi dùng object
        }
    }
}
</script>