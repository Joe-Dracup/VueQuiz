<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav">
      <div class="nav-left">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/vue">Vue Quiz</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
@import '@/assets/styling/base.css';

nav {
  margin-bottom: 2em;

  a {
    color: var(--color-text);
    padding: 0 1em 0 1em;
  }
}
</style>
