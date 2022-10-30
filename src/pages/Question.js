import React from 'react';
import styled from 'styled-components';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { Devices } from '../components/MainStyles';
import halloween from '../images/halloween.jpg';
import mobileBG from '../images/mobileBG.jpeg';

// Outline page for the questions
export const Question = () => {
  return (
    <OuterWrapperQuestion>
      <CurrentQuestion />
    </OuterWrapperQuestion>
  )
}

// The local styled components
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