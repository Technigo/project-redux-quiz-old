import React from 'react'
import { RestartButton } from './Button'
import { QuestionTitle, QuestionWrapper, QuestionText } from './CurrentQuestionStyling'

export const SummaryTest = () => {
  return (
    <QuestionWrapper>
      <QuestionTitle>Thank you for playing</QuestionTitle>
      <QuestionText>Please read your summary and try again</QuestionText>
      <RestartButton />
    </QuestionWrapper>
  )
}