import React from 'react';
// import styled from 'styled-components'
// TINAS ADDITION:
import { useNavigate } from 'react-router-dom';
import { NextButton } from 'components/NextButton';
// END
import { OuterWrapper, MainQuestion } from '../components/MainStyles';

export const Welcome = () => {
  // TINAS ADDITION:
  const navigate = useNavigate();
  const moveToQuiz = () => {
    navigate('/quiz');
  }
  // END

  return (
    <OuterWrapper>
      <MainQuestion>Halloween Quiz</MainQuestion>
      <p>Start here</p>
      <NextButton clickAction={moveToQuiz} content="Start Quiz" />
    </OuterWrapper>
  )
}
