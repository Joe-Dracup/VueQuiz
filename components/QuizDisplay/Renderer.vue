<script setup lang="ts">
import type { Quiz } from '@/types/quiz'

const props = defineProps<{ quiz: Quiz }>()

const quizFinished = ref(false)
const correctAnswers = ref(0)

function FinishQuiz(n: number): void {
  correctAnswers.value = n
  quizFinished.value = true
}
</script>
<template>
  <div>
    <h1>{{ quiz.Title }}</h1>
    <QuizDisplayQuestionContainer
      v-if="!quizFinished"
      @finish-quiz="FinishQuiz"
      :quiz="quiz"
    />
    <div v-else>
      You finished this quiz with a score of {{ correctAnswers }}/{{
        quiz.Questions.length
      }}
    </div>
  </div>
</template>
