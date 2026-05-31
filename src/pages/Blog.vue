<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref<String[]>([]);
const router = useRouter();

onMounted(async () => {
    const modules = import.meta.glob('/public/posts/*.md', { as: 'raw', eager: false });
    for (const mod in modules) { 
        posts.value.push(mod.replace('/public/posts/', ''));
    }
});

</script>
<template>
    <div v-for="[i, post] in posts.entries()" :key="i">
        <button v-on:click="() => {
            router.push(`/blog/post/${post}`);
        }">{{ post }}</button>
    </div>
</template>
<style scoped></style>
