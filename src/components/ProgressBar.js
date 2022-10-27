import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ProgressBar = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  return (
    <ProgressContainer>
      <progress
        id="progress"
        value={question.id}
        max="7" />
      <label htmlFor="progress">{question.id} / 6
      </label>
    </ProgressContainer>
  )
}