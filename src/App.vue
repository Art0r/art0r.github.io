<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  min-height: 100vh;
}

main {
  padding: 20px;
}
</style>