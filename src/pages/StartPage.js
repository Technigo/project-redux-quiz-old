import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { OuterWrapper, ButtonWrapper, NeonHeader, ButtonNeon } from 'GlobalStyles';

/* shows start page and the animation for intro count down */
export const StartPage = () => {
  return (
    <StartWrapper>
      <InnerWrapper>
        <Box>
          <Circle />
          <Circle2 />
          <Middle />
          <div className="number">
            <div>10</div>
            <div>9</div>
            <div>8</div>
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
          </div>
        </Box>
      </InnerWrapper>
      <StartButtonWrapper>
        <Link to="/quiz"><StartButtonNeon type="button"><NeonHeader>START QUIZ</NeonHeader></StartButtonNeon>
        </Link>
      </StartButtonWrapper>
    </StartWrapper>
  )
};

// Styled components

const StartButtonNeon = styled(ButtonNeon)`
  z-index: 1;
`;

//----------------------

/* positions the start button and media query for button */

const StartButtonWrapper = styled(ButtonWrapper)`
  position: relative;
  top: 85%;

  @media (max-width: 667px) {
    top: 90%;
    right: -15%;
  }
`;

//----------------------

const StartWrapper = styled(OuterWrapper)`
  padding: 0;
`;

//----------------------

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  aling-item: center; 
`;

//----------------------

/* Box for animation */
const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* white and gray background */ 
  // background: radial-gradient(#fff,#757575);
  overflow: hidden;
  &:before
  {
    content: '';
    position: absolute;
    top:50%;
    left: 0%;
    transform: translateY(-50%);
    width:100%;
    height: 5px;
    background: #000
  }

  &:after
  {
    content: '';
    position: absolute;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    width:5px;
    height: 100%;
    background: #000
  }

`;

//----------------------

/* Inner circle in animation and media query for small phone and normal phone */

const Circle = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:500px;
  height:500px;
  border:5px solid #fff;
  border-radius: 50%;
  z-index: 1;

  @media (max-width: 299px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 300px) and (max-width: 667px) {
    width: 200px;
    height: 200px;
  }
`;

//----------------------

/* Outer circle in animation and media query for small phone and normal phone */

const Circle2 = styled(Circle)`
  width:600px;
  height:600px;

  @media (max-width: 299px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 300px) and (max-width: 667px) {
    width: 300px;
    height: 300px;
  }

`;

//----------------------

/* Middle of animation and media query for small phone and normal phone.
Countdown for numbers, number size can be found in index.css */

const Middle = styled.div`
  position: absolute;
  top:calc(50% - 2px);
  left: 50%;
  height: 4px;
  width:1200px;
  background: #000;
  animation: animate 1s linear infinite;
  transform-origin: left;

  @keyframes animate {
    0%
    {
      transform: rotate(0deg);
    }
    100%
    {
      transform: rotate(360deg);
    }
  }
`;