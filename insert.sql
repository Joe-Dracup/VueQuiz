INSERT INTO quizzes (id, quiz)
VALUES ( '12345678', 
'{
  "Title": "Vue Quiz",
  "MaxAnswerAttempts": 1,
  "Questions": [
    {
      "QuestionId": 1,
      "QuestionText": "How old is Joe?",
      "CorrectAnswerId": 2,
      "Answers": [
        {
          "AnswerId": 1,
          "AnswerText": "16"
        },
        {
          "AnswerId": 2,
          "AnswerText": "25"
        },
        {
          "AnswerId": 3,
          "AnswerText": "40"
        },
        {
          "AnswerId": 4,
          "AnswerText": "106"
        }
      ]
    },
    {
      "QuestionId": 2,
      "QuestionText": "Does Leon Suck?",
      "CorrectAnswerId": 4,
      "Answers": [
        {
          "AnswerId": 1,
          "AnswerText": "Depends on the phase of the moon"
        },
        {
          "AnswerId": 2,
          "AnswerText": "What was the question again?"
        },
        {
          "AnswerId": 3,
          "AnswerText": "Ask again later"
        },
        {
          "AnswerId": 4,
          "AnswerText": "Yes"
        }
      ]
    }
  ]
}')