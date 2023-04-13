import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '../assets/startbackground.jpg';

const StartQuiz = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
 font-family: var(--headings-font-family);
 font-size: 4rem;
 font-weight: 600;
 text-align: center;
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%)
  `;

const gradientAnimation = keyframes`
  5% {color: #eaac8b;}
  50% {color: #be56b6f;}
  100% {color: #b56576;}
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Text = styled.p`
  font-size: 2rem;
  color: #1a5e63;
  font-weight: bold;
  margin-bottom: 5rem;
  background-color: rgba(57, 48, 74, 0.3);
  animation-name: ${gradientAnimation}, ${bounceAnimation};
  animation-duration: 5s, 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background-color: #b56576;
  color: #eff1f3;
  border: 3px solid #fed766;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ffeedb;
    color: #553739;
    box-shadow: 0 0 10px 0 #fed766, 0 0 20px 0 #fed766, 0 0 30px 0 #fed766, 0 0 40px 0 #fed766, 0 0 50px 1rem #fed766;
  }
`;

const Start = ({ start }) => {
  const soundEffect = new Audio('../assets/win1.mp3');

  const handleClick = () => {
    soundEffect.play();
    start(true);
  }

  return (
    <StartQuiz>
      <Title>Welcome to the amazing elephants-members trivia quiz</Title>
      <Text>Try your luck by pressing the button below</Text>
      <Button onClick={handleClick}>Clickyclick</Button>
    </StartQuiz>
  );
}

export default Start;