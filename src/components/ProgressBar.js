/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const correctPercent = (currentQuestion * 100) / 4;
  const percent = Number(correctPercent).toFixed();

  const StyledContainer = styled.div`
    height: 1.5rem;
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 0.5rem;
`;
  const StyledBar = styled.div`
    display: flex;
    height: 100%;
    width: ${percent}%;
    margin-top: 2%;
    background-color: #5c1fdf;
    border-radius: 10px;
    align-items: center;
    font-family: 'Roboto';
    font-weight: bold;
    color: white;
  `;
  const PaddedP = styled.p`
   padding-left: 15px;
 `;

  return (
    <StyledContainer>
      <StyledBar
        role="progressbar"
        aria-valuenow={percent - 10}
        aria-valuemin={0}
        aria-valuemax={100}>
        <PaddedP>{percent}%</PaddedP>
      </StyledBar>
    </StyledContainer>
  )
}