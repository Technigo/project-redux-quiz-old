import React from 'react';
import styled from 'styled-components';
import { Devices } from './MainStyles';

// Universal button-component that navigates to the next page/restarts the quiz
export const NextButton = ({ clickAction, content }) => {
  return (
    <div>
      <StyledButton type="button" onClick={clickAction}>{content}</StyledButton>
    </div>
  )
}

// The local styled components
export const StyledButton = styled.button`
  border-radius: 5px;
  color: black;
  font-size: 18px;
  padding: 10px;
  font-family: 'Courier Prime', monospace;
  margin-top: 0;

  @media ${Devices.tablet} {
    font-size: 20px;
    padding: 15px;
  }

  &:hover {
  transition: all .3s ease-in-out;
  transform: scale(1.1);
  }
`
