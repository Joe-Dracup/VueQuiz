<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav">
      <div class="nav-left">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/quiz/vuequiz">Vue Quiz</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <component :is="Component"></component>

            <!-- loading state -->
            <template #fallback> Loading... </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
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
