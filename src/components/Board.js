/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Button } from './Button'
import { CurrentQuestion } from './CurrentQuestion'

export const Board = () => {
  const dispatch = useDispatch()
  const quizOver = useSelector((store) => store.quiz.quizOver)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  const [isAnswered, setIsAnswered] = useState(false) // track whether current question is answered

  console.log(quizOver)
  console.log(currentQuestion)

  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsAnswered(false) // reset isAnswered state for next question
  }

  const onAnswerSelect = () => {
    setIsAnswered(true) // set isAnswered state to true when user selects an answer
  }

  if (!quizOver) {
    return (
      <>
        <CurrentQuestion onAnswerSelect={onAnswerSelect} />
        {currentQuestion < 7 && (
          <Button
            handleClick={() => onNextQuestion()}
            buttonText="Next question"
            disabled={!isAnswered} // disable button if current question is not answered
          />
        )}
        {currentQuestion === 7 && (
          <Button
            handleClick={() => onNextQuestion()}
            buttonText="Show results"
            disabled={!isAnswered} // disable button if current question is not answered
          />
        )}
      </>
    )
  } else {
    return (
      <Button
        handleClick={() => onRestart()}
        buttonText="Start Over" />
    )
  }
}

