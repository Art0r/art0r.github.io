<script setup lang="ts">
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const content = ref('');
const route = useRoute();

async function loadContent() {
  const slug = route.params.slug;
  if (!slug || Array.isArray(slug)) return;
  
  try {
    const file = await fetch(`/posts/${slug}`);
    const text = await file.text();
    const parsedContent = await marked.parse(text);
    content.value = DOMPurify.sanitize(parsedContent);
  } catch (error) {
    console.error('Error loading markdown:', error);
    content.value = 'Failed to load content';
  }
}

watch(
  () => route.params.slug,
  () => loadContent(),
  { immediate: true }
);
</script>
<template>
  <h1>Meu Post</h1>
  <div v-html="content"></div>
</template>

<style scoped></style>
