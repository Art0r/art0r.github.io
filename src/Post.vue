<script setup lang="ts">
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { ref, onMounted } from 'vue';

let content = ref('');

onMounted(async () => {
  try {
    const file = await fetch('/posts/index.md');
    const text = await file.text();
    const parsedContent = await marked.parse(text);
    const sanitizedContent = DOMPurify.sanitize(parsedContent);
    content.value = sanitizedContent;
  } catch (error) {
    console.error('Error loading markdown:', error);
    content.value = 'Failed to load content';
  }
});
</script>
<template>
  <h1>Meu Post</h1>
  <div v-html="content"></div>
</template>

<style scoped></style>
