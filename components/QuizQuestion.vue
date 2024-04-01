<script setup lang="ts">
import { ref } from "vue";
import type { Question } from "@/types/quiz";
import QuizAnswer from "@/components/QuizAnswer.vue";

const props = defineProps<{
  question: Question;
  maxAnswerAttempts: number;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: "question-answered", correct: boolean): void;
}>();

const questionEnabled = ref(true);
const attemptedAnswers = ref<number[]>([]);

function submitAnswer(answerId: number): void {
  if (
    !questionEnabled.value ||
    attemptedAnswers.value.find((x) => x === answerId)
  ) {
    return;
  }

  if (answerId === props.question.CorrectAnswerId) {
    questionEnabled.value = false;
    emit("question-answered", true);
  } else {
    attemptedAnswers.value = [...attemptedAnswers.value, answerId];

    if (attemptedAnswers.value.length >= props.maxAnswerAttempts) {
      questionEnabled.value = false;
      emit("question-answered", false);
    }
  }
}
</script>

<template>
  <div v-if="isActive">
    <div>
      <h3>{{ question.QuestionText }}</h3>
    </div>
    <div>
      <QuizAnswer
        v-for="answer in question.Answers"
        :answer="answer"
        @answer-clicked="submitAnswer"
        :key="answer.AnswerId"
        :isCorrectAnswer="answer.AnswerId === question.CorrectAnswerId"
        :questionDisabled="!questionEnabled"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
