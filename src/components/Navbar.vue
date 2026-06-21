<template>
    <nav>
        <router-link 
          v-for="route in router.options.routes"
          :class="{ active: route.path === router.currentRoute.path }"
          :key="route.path" 
          :to="route.path"
        >{{ route.name }}</router-link>
    </nav>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/blog';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const store = useBlogStore();
const router = useRouter();

onMounted(async () => {
  await store.getPosts();
});
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  li {
    padding: 10px 15px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }

  a, .router-link {
    text-decoration: none;
    color: #333;
    padding: 10px 15px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #e0e0e0;
    }
  }

  .active {
    background-color: blueviolet;
    color: white;
    
    &:hover {
      background-color: blue;
    }
  }
  
  ul {
    list-style-type: none;
    margin: 0 10px;
    padding: 0;
  }

  .non-selected {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: azure;

    &:hover {
      cursor: pointer;
      background-color: aqua;
    }
  }

  .selected {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: blueviolet;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      cursor: pointer;
      background-color: blue;
    }
  }
</style>