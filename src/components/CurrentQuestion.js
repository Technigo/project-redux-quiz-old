import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ))
    if (question.correctAnswerIndex === answerIndex) {
      alert('Correct answer!')
    } else {
      alert('You are wrong!')
    }
  }

  const allAnswers = question.options.map((option, index) => {
    return (<button onClick={() => onAnswerSubmit(question.id, index)} type="button" key={option.id}>{option}</button>)
  })
  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {allAnswers}
    </div>
  )
}
