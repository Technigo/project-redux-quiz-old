/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const correctPercent = (currentQuestion * 100) / 5;
  const percent = Number(correctPercent).toFixed();

  const StyledContainer = styled.div`
    height: 2.5rem;
    width: 80%;
    background-color: lightgrey;
    border-radius: 10px;
    margin: 0.5rem auto;
`;
  const StyledBar = styled.div`
    display: flex;
    height: 100%;
    width: ${percent}%;
    background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C); 
    border-radius: 10px;
    align-items: center;
    font-family: var(--paragraph-font-family);
    font-weight: bold;
    color: black;
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