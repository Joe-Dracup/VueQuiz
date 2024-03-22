export type Quiz = {
  Title: string
  MaxAnswerAttempts: number
  Questions: Question[]
}

export type Question = {
  QuestionId: number
  QuestionText: string
  CorrectAnswerId: number
  Answers: Answer[]
}

export type Answer = {
  AnswerId: number
  AnswerText: string
}
