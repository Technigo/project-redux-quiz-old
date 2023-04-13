/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'
import { Button } from './Button'
import { Summary } from './Summary'
import { CurrentQuestion } from './CurrentQuestion'
// import { Footer } from './Footer'

export const Board = () => {
  const dispatch = useDispatch()
  const quizOver = useSelector((store) => store.quiz.quizOver)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  const [isAnswered, setIsAnswered] = useState(false) // track whether current question is answered

  console.log(quizOver)
  console.log(currentQuestion)

  // const onRestart = () => {
  //   dispatch(quiz.actions.restart())
  // }

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsAnswered(false)
  }

  const onAnswerSelect = () => {
    setIsAnswered(true)
    setTimeout(() => onNextQuestion(), 2000)
  }

  if (!quizOver) {
    return (
      <>
        <CurrentQuestion onAnswerSelect={onAnswerSelect} />
        {/* {currentQuestion < 7 && (
          <Button
            handleClick={() => onNextQuestion()}
            buttonText="Next question"
            disabled={!isAnswered}
          />
        )} */}
        {currentQuestion === 7 && (
          <Button
            handleClick={() => onNextQuestion()}
            buttonText="Show results"
            disabled={!isAnswered}
          />
        )}
      </>
    )
  } else {
    return (
      <StyledSummaryWrapper>
        <Summary />
        {/* <Button
            handleClick={() => onRestart()}
            buttonText="Start Over"
          /> */}
      </StyledSummaryWrapper>
    )
  }
}

const StyledSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;

  @media (min-width:1024px){
  width:70%;
  }
  `