/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const totalQuestions = useSelector(
    (state) => state.quiz.questions.length
  );
    // Calculate percentage progress based on current question index and total number of questions
    // Subtract 1 from both currentQuestion and totalQuestions because array indices start from 0
  const percent = ((currentQuestion - 1) / (totalQuestions - 1)) * 100;

  const StyledContainer = styled.div`
   background-color: darkgreen;
   border: black solid 2px;
  `;
  const StyledBar = styled.div`
    display: flex;
    height: 100%;
    width: 50px;
    background-color: lightgreen;
    border-radius: 50px;
    font-weight: bold;
    color: black;
  `;

  const PaddedP = styled.p`
    padding-left: 12px;
  `;

  return (
    <StyledContainer>
      <StyledBar
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <PaddedP>
          {currentQuestion}/{totalQuestions}
        </PaddedP>
      </StyledBar>
    </StyledContainer>
  );
};