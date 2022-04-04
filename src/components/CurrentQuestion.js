import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Option } from './Option'
import { NextButton } from './Buttons'

export const CurrentQuestion = () => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  // const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, answerIndex) => (
        <Option key={answerIndex} option={option} answerIndex={answerIndex} />
      ))}
      <NextButton />
    </div>
  )
}

