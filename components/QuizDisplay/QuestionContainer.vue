<script setup lang="ts">
import type { Quiz } from '@/types/quiz'
import { ref } from 'vue'

const props = defineProps<{
  quiz: Quiz
}>()

const emit = defineEmits<{
  (e: 'finish-quiz', correctAnswers: number): void
}>()

const activeQuestionId = ref(props.quiz.Questions[0].QuestionId)
const correctAnswers = ref(0)
const disableButton = ref(true)

function nextQuestion(): void {
  disableButton.value = true

  activeQuestionId.value++

  if (
    !props.quiz.Questions.find((x) => x.QuestionId === activeQuestionId.value)
  ) {
    emit('finish-quiz', correctAnswers.value)
  }
}

function QuestionAnswered(correct: boolean): void {
  if (correct) {
    correctAnswers.value++
  }

  disableButton.value = false
}
</script>

<template>
  <div class="question">
    <QuizDisplayQuestion
      v-for="question in quiz.Questions"
      :question="question"
      :isActive="question.QuestionId === activeQuestionId"
      :maxAnswerAttempts="quiz.MaxAnswerAttempts"
      @question-answered="QuestionAnswered"
    />
  </div>
  <button :disabled="disableButton" @click="nextQuestion" class="nextButton">
    Next
  </button>
</template>

<style lang="scss" scoped>
.question {
  margin-bottom: 1em;

  @media (min-width: 1024px) {
    width: 50%;
  }
}
</style>
