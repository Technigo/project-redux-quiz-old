/* eslint-disable max-len */
import React from 'react'
// import styled from 'styled-components';
import { useSelector } from 'react-redux'
// import { quiz } from '../reducers/quiz'
// import { RestartButton } from './Button'
import { HeroSummaryContainer, StyledTitle } from './SummaryTestStyling';
import heroSummaryImage from '../assets/hero-summary-image.jpg';

export const SummaryTest = () => {
  const answers = useSelector((state) => state.quiz.answers)
  return (
    <HeroSummaryContainer image={heroSummaryImage}>
      <StyledTitle>Summary</StyledTitle>
      {answers.map((answer) => (
        <HeroSummaryContainer.AnswerContainer key={answer.question.questionText}>
          <HeroSummaryContainer.Question>{answer.question.questionText}</HeroSummaryContainer.Question>
          <HeroSummaryContainer.UserAnswer>
            {answer.answer}
            {answer.isCorrect ? '✔️' : '❌'}
          </HeroSummaryContainer.UserAnswer>
          <HeroSummaryContainer.CorrectAnswer>
            {answer.isCorrect ? '' : 'Correct answer: '}
            {!answer.isCorrect
              ? answer.question.options[answer.question.correctAnswerIndex]
              : 'CORRECT'}
          </HeroSummaryContainer.CorrectAnswer>
        </HeroSummaryContainer.AnswerContainer>
      ))}
    </HeroSummaryContainer>
  )
}