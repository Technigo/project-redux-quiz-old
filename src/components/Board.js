/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from 'components/Summary'
import styled from 'styled-components'
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
    setIsAnswered(false)
  }

  const onAnswerSelect = () => {
    setIsAnswered(true)
  }

  if (!quizOver) {
    return (
      <>
        <CurrentQuestion onAnswerSelect={onAnswerSelect} />
        {currentQuestion < 7 && (
          <Button
            handleClick={() => onNextQuestion()}
            buttonText="Next question"
            disabled={!isAnswered}
          />
        )}
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
        <Button
          handleClick={() => onRestart()}
          buttonText="Start Over"
        />
      </StyledSummaryWrapper>
    )
  }
}

const StyledSummaryWrapper = styled.div`
display: flex;
justify-content: center;
`

