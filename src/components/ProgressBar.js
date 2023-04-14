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
  /* Divided by the number of questions, so far hard coded */
  const correctPercent = (currentQuestion * 100) / 8;
  let percent = Number(correctPercent).toFixed();

  /* Styles of container and bar */
  const StyledContainer = styled.div`
    height: 2rem;
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 0.5rem;
  `;
  const StyledBar = styled.div`
    display: flex;
    height: 100%;
    width: ${percent}%;
    background-color: #fad040;
    border-radius: 10px 0 0 10px;
    align-items: center;
    font-family: 'Roboto';
    font-weight: bold;
    color: #0078be;
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
        aria-valuemax={100}
      >
        <PaddedP>{percent}%</PaddedP>
      </StyledBar>
    </StyledContainer>
  );
};
