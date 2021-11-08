import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const dispatch = useDispatch()

  console.log('question', question)

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
        <button
          type='button'
          key={option}
          onClick={() => onAnswerSubmit(question.id, index)}
        >
          {option}
        </button>
      ))}
      <button
        type='button'
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
      >
        Go to next question
      </button>
    </div>
  )
}
