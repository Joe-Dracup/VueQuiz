<script setup lang="ts">
import type { Quiz } from '@/types/quiz'
const router = useRoute()

const { data: quiz } = await useFetch<Quiz>(`/api/quiz/${router.params.id}`)
</script>

<template>
  <main>
    <QuizDisplayRenderer v-if="quiz" :quiz="quiz"></QuizDisplayRenderer>
    <div v-else>
      <h1>Oops</h1>
      <h2>We could not find that quiz, please try again</h2>
    </div>
  </main>
</template>

<style lang="sass" scoped></style>
