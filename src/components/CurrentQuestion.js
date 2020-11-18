/* eslint-disable */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'
import Button from './Button'

// import { quiz } from '../reducers/quiz'

export const CurrentQuestion = ({handleNextQuestion, buttonStatus}) => {
  const dispatch = useDispatch()
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onButtonClick = (option) => {
    handleNextQuestion(true)
    return dispatch(quiz.actions.submitAnswer(
      { questionId: question.id, answerIndex: question.options.indexOf(option) }
    ))
  }
  
  return (
    <div>
      <h1>{question.questionText}</h1>
      <div>
        {question.options.map((option, index) => (
          <Button 
            disabled={buttonStatus}
            questionId={question.id}
            index = {index}
            option= {option}
            correctIndex = {question.correctAnswerIndex}
            onClick={() => onButtonClick(option)} 
            type="button">{option}
          </Button>
        ))}
      </div>
    </div>
  )
}