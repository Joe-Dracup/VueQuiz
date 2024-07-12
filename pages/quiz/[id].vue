<script setup lang="ts">
import type { Quiz } from "@/types/quiz"
const router = useRoute()

const { data: quiz } = await useFetch<Quiz>(`/api/quiz/${router.params.id}`)
</script>

<template>
  <main>
    <QuizRenderer v-if="quiz" :quiz="quiz"></QuizRenderer>
    <div v-else>Could not find a quiz with that id</div>
  </main>
</template>
