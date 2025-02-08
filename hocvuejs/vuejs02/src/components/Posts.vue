<template>
    <h1>Danh sách bài viết</h1>
    <h3 v-if="posts.error">{{ posts.error }}</h3>
    <h3 v-if="posts.isLoading">Loading...</h3>
    <ul v-else>
        <li v-for="post in posts.postList" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </li>
    </ul>
    <button :disabled="limitState.isLoading" @click="loadMore">{{ limitState.isLoading ? 'Loading...' : 'Load More'
        }}</button>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue';
// const posts = ref([]);
const posts = reactive({
    postList: [],
    isLoading: true,
    error: null
})
const limitState = reactive({
    limit: 5,
    isLoading: false,
})
const getPosts = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limitState.limit}`);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        posts.postList = data;
    } catch (error) {
        posts.error = error;
    } finally {
        posts.isLoading = false;
        limitState.isLoading = false;
    }
}
onMounted(getPosts);

const loadMore = () => {
    limitState.limit += 5;
    limitState.isLoading = true;
    getPosts();
}
</script>