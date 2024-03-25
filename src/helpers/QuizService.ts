import type { Quiz } from '@/types/quiz'

export async function GetQuiz(quizName: string): Promise<Quiz> {
  const quiz: Quiz = await import(`@/assets/content/${quizName}.json`)

  return quiz
}
