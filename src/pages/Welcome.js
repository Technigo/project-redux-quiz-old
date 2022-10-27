import React from 'react';
// import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { NextButton } from 'components/NextButton';
import { OuterWrapper, MainQuestion } from '../components/MainStyles';

export const Welcome = () => {
  const navigate = useNavigate();

  const moveToQuiz = () => {
    navigate('/quiz');
  }

  return (
    <OuterWrapper>
      <MainQuestion>Halloween Quiz</MainQuestion>
      <p>Start here</p>
      <NextButton clickAction={moveToQuiz} content="Start Quiz" />
    </OuterWrapper>
  )
}
