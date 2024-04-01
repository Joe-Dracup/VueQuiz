<script setup lang="ts">
import type { Quiz } from "@/types/quiz";
import QuizContainer from "@/components/QuizContainer.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import items from "public/Quiz.json";
// import { GetQuiz } from "@/helpers/QuizService";

const route = useRoute();

const quiz = ref<Quiz>(items);
const quizFinished = ref(false);
const correctAnswers = ref(0);

function FinishQuiz(n: number): void {
  correctAnswers.value = n;
  quizFinished.value = true;
}
</script>

<template>
  <main>
    <h1>{{ quiz.Title }}</h1>
    <QuizContainer
      v-if="!quizFinished"
      @finish-quiz="FinishQuiz"
      :quiz="quiz"
    />
    <div v-else>
      You finished this quiz with a score of {{ correctAnswers }}/{{
        quiz.Questions.length
      }}
    </div>
  </main>
</template>
