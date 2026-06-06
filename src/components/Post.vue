<script setup lang="ts">
import { useBlogStore } from '@/stores/blog';

const blogStore = useBlogStore();

</script>
<template>
  <h1>Meu Post</h1>
  <div v-html="blogStore.selectedPostContent"></div>
</template>

<style scoped></style>
