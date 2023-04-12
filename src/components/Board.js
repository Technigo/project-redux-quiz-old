/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Button } from './Button'
import { CurrentQuestion } from './CurrentQuestion'

export const Board = () => {
  const dispatch = useDispatch()
  const quizOver = useSelector((store) => store.quiz.quizOver)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  console.log(quizOver)
  console.log(currentQuestion)

  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  if (!quizOver) {
    return (
      <>
        <CurrentQuestion />
        {currentQuestion < 7 && (
          <Button
            handleClick={() => onNextQuestion()}
            buttonText="Next question" />
        )}
        {currentQuestion === 7 && (
          <Button
            handleClick={() => onNextQuestion()}
            buttonText="Show results" />
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