
/* eslint-disable max-len */
// import React, { useState } from 'react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
// import { SummaryPage } from './SummaryPage'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  // const isQuizOver = useSelector((store) => store.quiz.quizOver)
  // const correctAnswer = question.correctAnswerIndex
  // const isCorrect = useSelector((store) => store.quiz.answers[store.quiz.currentQuestionIndex]
  //   .isCorrect)
  // const [selectedAnswerIndex, setSelectedAnswerIndex] = useState('')
  const dispatch = useDispatch()
  const onAnswerSubmit = (questionId, answerIndex) => {
    // setSelectedAnswerIndex(answerIndex)
    // if (correctAnswer === answerIndex) {
    // console.log(selectedAnswerIndex)
    // console.log(questionId)
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))

    // }
    // dispatch(quiz.actions.submitAnswer({ }))

    setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 2000)
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((answer, index) => {
          return (
            <button
              // className={selectedAnswerIndex === question.correctAnswerIndex ? 'green' : 'red'}
              type="button"
              id={index}
              onClick={() => onAnswerSubmit(question.id, index)}
              key={answer}>
              {answer}
            </button>
          )
        })}
      </div>

    </div>
  )
}
