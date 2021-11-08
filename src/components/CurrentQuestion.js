import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from "../reducers/quiz"

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => (
      <button key={option.id} onClick={() => onAnswerSubmit(question.id, index)}>{option.answer}</button>
      ))
    }
    </div>
  )
}
