<script setup lang="ts">
import type { Answer } from '@/types/quiz'
import { ref, computed } from 'vue'

const props = defineProps<{
  answer: Answer
  questionDisabled: boolean
  isCorrectAnswer: boolean
}>()

const emit = defineEmits<{
  (e: 'answer-clicked', answerId: number): void
}>()

const disabled = ref(false)

const showDisabled = computed(() => {
  return disabled.value || props.questionDisabled
})

function submitAnswer(answerId: number): void {
  disabled.value = true
  emit('answer-clicked', answerId)
}
</script>

<template>
  <div
    @click="submitAnswer(answer.AnswerId)"
    class="answer"
    :class="{ disable: showDisabled, correct: showDisabled && isCorrectAnswer }"
  >
    <p v-if="showDisabled && isCorrectAnswer" class="icon">&check;</p>
    <p v-else-if="showDisabled && !isCorrectAnswer" class="icon">&cross;</p>
    <p v-else class="icon">&nbsp;</p>
    <span>{{ answer.AnswerText }}</span>
  </div>
</template>

<style lang="scss" scoped>
a {
  cursor: pointer;
}

.answer {
  border: solid;
  border-radius: 1em;
  border-color: white;
  margin-top: 1em;
  cursor: pointer;
}

.icon {
  margin-left: 0.5em;
  display: inline;
}

.disable {
  cursor: not-allowed;
  border-color: red;
}

.correct {
  border-color: green;
}
</style>
