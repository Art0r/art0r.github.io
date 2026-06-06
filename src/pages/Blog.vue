<script setup lang="ts">
import Post from '@/components/Post.vue';
import { useBlogStore } from '@/stores/blog';
import { onMounted } from 'vue';

const store = useBlogStore();

onMounted(async () => {
  await store.getPosts();
});

</script>
<template>
  <div v-for="post in store.posts">
    <button v-on:click="async () => {
      await store.changeSelectedPost(post);
    }">{{ post }}</button>
  </div>
  <Post />

</template>
<style scoped></style>
