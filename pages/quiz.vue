<script setup lang="ts">
import type { Quiz } from '@/types/quiz';

const { data: quiz } = await useFetch<Quiz>('/api/quiz');
</script>

<template>
  <main>
    <QuizRenderer v-if="quiz" :quiz="quiz"></QuizRenderer>
    <div v-else>Could not find a quiz with that id</div>
  </main>
</template>
