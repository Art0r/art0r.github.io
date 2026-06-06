<script setup lang="ts">
import Post from '@/components/Post.vue';
import { useBlogStore } from '@/stores/blog';
import { onMounted, ref } from 'vue';

const posts = ref<String[]>([]);
const store = useBlogStore();

onMounted(async () => {
  const modules = import.meta.glob('/public/content/posts/*.md', { query: '?raw', eager: false });
  for (const mod in modules) {
    posts.value.push(mod.replace('/public/content/posts/', ''));
  }
});

</script>
<template>
  <div v-for="[i, post] in posts.entries()" :key="i">
    <button v-on:click="async () => {
      await store.changeSelectedPost(post);
    }">{{ post }}</button>
  </div>
  <Post />

</template>
<style scoped></style>
