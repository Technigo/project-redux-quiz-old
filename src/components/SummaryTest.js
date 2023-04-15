/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react'
// import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz';
import { HeroSummaryContainer, StyledTitle, AnswerContainer, Question, UserAnswer, CorrectAnswer, StyledRestartButton, ResultContainer } from './SummaryTestStyling';
import heroSummaryImage from '../assets/hero-summary-image.jpg';

// This code creates a React component that displays a summary of quiz answers.
// It uses the HeroSummaryContainer component from the SummaryTestStyling.js file to create a container with a hero summary image as a background.
// Inside the container, the component generates a list of answer summaries using the map method on the answers array.
// For each answer object in the array, the component creates an AnswerContainer component with a unique key based on the question text.
// Inside the AnswerContainer, there is a Question component that displays the text of the question.
// Next, there is a UserAnswer component that shows the user's answer and a checkmark if the answer is correct, or a cross if it is incorrect.
// Finally, there is a CorrectAnswer component that displays the correct answer if the user's answer is incorrect, or the text "CORRECT" if the user's answer is correct.
// In summary, this component creates a user-friendly summary of the quiz answers that shows both the user's answer and the correct answer.

export const SummaryTest = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const percentage = Math.round((correctAnswers / answers.length) * 100);

  const handleRestart = () => {
    dispatch(quiz.resetQuiz());
  };

  return (
    <HeroSummaryContainer image={heroSummaryImage}>
      <StyledTitle>Summary</StyledTitle>
      <p>You got {correctAnswers} out of {answers.length} questions right ({percentage}%)</p>
      <ResultContainer>
        {answers.map((answer) => (
          <HeroSummaryContainer.AnswerContainer key={answer.question.questionText}>
            <HeroSummaryContainer.Question>{answer.question.questionText}</HeroSummaryContainer.Question>
            <HeroSummaryContainer.UserAnswer>
              {answer.answer}
              {answer.isCorrect ? ' ✓' : ' ❌'}
            </HeroSummaryContainer.UserAnswer>
            <HeroSummaryContainer.CorrectAnswer>
              {answer.isCorrect ? '' : 'Correct answer: '}
              {!answer.isCorrect
                ? answer.question.options[answer.question.correctAnswerIndex]
                : 'Right answer!'}
            </HeroSummaryContainer.CorrectAnswer>
          </HeroSummaryContainer.AnswerContainer>
        ))}
      </ResultContainer>
      <StyledRestartButton onClick={handleRestart}>Restart</StyledRestartButton>
    </HeroSummaryContainer>
  )
};