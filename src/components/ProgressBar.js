import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const ProgressBar = () => {
  const allQuestions = useSelector((state) => state.quiz.questions)
  const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex)
  return (
    <div>
      <CounterStyling>Question {(currentQuestion + 1)}/ {allQuestions.length}</CounterStyling>
    </div>
  )
}

export default ProgressBar;

export const CounterStyling = styled.h1`
 font-size: 20px;
 font-family: 'Quicksand', sans-serif;

 @media (min-width: 668px) and (max-width: 1024px) {
  font-size: 22px;
 }

 @media (min: 1024px) {
  font-size: 25px;
 }
`;