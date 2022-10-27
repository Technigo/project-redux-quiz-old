/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import Summary from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const entireStore = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('antal frågor', entireStore.quiz.questions.length)

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
    dispatch(quiz.actions.goToNextQuestion())
    console.log('is quiz over?', entireStore.quiz.quizOver)
  }

  const allAnswers = question.options.map((option, index) => {
    return (<button onClick={() => onAnswerSubmit(question.id, index)} type="button" key={option}>{option}</button>)
  })
  return (
    <div>
      {entireStore.quiz.quizOver
        ? <Summary />
        : <div>
          <h1>Question: {question.questionText}</h1>
          {allAnswers}
        </div>}
    </div>

  )
}
