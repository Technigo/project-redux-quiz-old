import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ProgressBar } from 'components/ProgressBar';
import { NextButton } from 'components/NextButton';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { Devices } from '../components/MainStyles';
import { quiz } from '../reducers/quiz';
import halloween from '../images/halloween.jpg';
import mobileBG from '../images/mobileBG.jpeg';

export const Question = () => {
  const dispatch = useDispatch();

  const moveToNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <OuterWrapperQuestion>
      <CurrentQuestion />
      <ProgressBar />
      <NextButton clickAction={moveToNext} content="Next" />
    </OuterWrapperQuestion>
  )
}

const OuterWrapperQuestion = styled.div`
  color: white;
  background-image: url(${mobileBG});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-position: center;
  overflow-x: hidden;

  @media ${Devices.tablet} {
    background-image: url(${halloween});
    
  }
`