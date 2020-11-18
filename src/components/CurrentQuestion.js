/* eslint-disable max-len */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

// import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const checkAnswer = useSelector((state) => state.quiz.answers.isCorrect)
  console.log(checkAnswer)
  //   const answer = state.quiz.answers.find((questionId) => question.id === questionId)
  //   if (answer) {
  //     return answer
  //   } else {
  //     return null
  //   }
  // })

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const buttonOnClick = (option) => {
    return dispatch(quiz.actions.submitAnswer(
      { questionId: question.id, answerIndex: question.options.indexOf(option) }
    ))
  }
  return (
    <div>
      <h1>{question.questionText}</h1>
      <div>
        {question.options.map((option) => <button onClick={() => buttonOnClick(option)} type="button">{option}</button>)}
      </div>
    </div>
  )
}

/* <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} type="button">
        Next Question
      </button> */