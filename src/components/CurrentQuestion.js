import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({questionId:id, answerIndex:index}))
    if (question.correctAnswerIndex === index) {
      dispatch(quiz.actions.goToNextQuestion())
    }
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((answer, index) => {
        return (
          <button key={answer} onClick={() => onAnswerSubmit(question.id, index)}>{answer}</button>
    
        )
      })}
    </div>
  )
}