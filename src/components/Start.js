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
  5% {color: #b56576 ;}
  50% {color: #39304a;}
  100% {color: #028090;}
`;

const Text = styled.p`
  font-size: 2rem;
  color: #1a5e63;
  font-weight: bold;
  margin-bottom: 2rem;
  animation-name: ${gradientAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background-color: #846a6a;
  color: #eff1f3;
  border: 3px solid #fed766;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ffeedb;
    color: #553739;
  }
`;

const Start = ({ start }) => {
  return (
    <StartQuiz>
      <Title>Welcome to the amazing elephants-members trivia quiz</Title>
      <Text>Try your luck by pressing the button below</Text>
      <Button onClick={() => start(true)}>Clickyclick</Button>
    </StartQuiz>
  );
}

export default Start;