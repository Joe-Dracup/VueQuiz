<template>
  <header>
    <nav class="nav">
      <div class="nav-left">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/quiz/123">Vue Quiz</NuxtLink>
      </div>
    </nav>
  </header>

  <NuxtPage />
</template>

<style lang="scss" scoped>
// @import "@/assets/styling/base.css";

nav {
  margin-bottom: 2em;

  a {
    // color: var(--color-text);
    padding: 0 1em 0 1em;
  }
}
</style>
