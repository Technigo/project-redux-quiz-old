import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '../assets/startbackground.jpg';
import noise from '../assets/win1.mp3';
import { quiz } from '../reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';

const StartQuiz = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StartContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(26, 25, 25, 0.3);
  border-radius: 5%;
  padding: 10%;
  text-align: center;
`;

const Title = styled.h1`
 font-family: var(--headings-font-family);
 font-size: 3rem;
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
  0% {color: #eaac8b;}
  50% {color: #be56b6f;}
  100% {color: #b56576;}
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
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
//   background-color: rgba(57, 48, 74, 0.3);
  animation-name: ${gradientAnimation}, ${bounceAnimation};
  animation-duration: 5s, 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const Button = styled.button`
  font-size: 1.5rem;
//   background-color: #b56576;
  background-color: rgba(181, 101, 118, 0.5);
  color: #eff1f3;
  border: 3px solid #fed766;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ffeedb;
    color: #553739;
    box-shadow: 0 0 10px 0 #fed766, 0 0 20px 0 #fed766, 0 0 30px 0 #fed766, 0 0 40px 0 #fed766, 0 0 50px 1rem #fed766;
  }
`;

const Start = () => {
  const [isStarted, setIsStarted] = useState(false);
  const soundEffect = new Audio(noise);
  const dispatch = useDispatch();

  const handleClick = () => {
    soundEffect.play();
    dispatch(quiz.actions.startQuiz());
    dispatch(quiz.actions.setCurrentQuestionIndex(0));
    setIsStarted(true);
  }

  return (
    <StartQuiz>
      <StartContainer>
        <Title>Welcome to the amazing trivia quiz </Title>
        <Text>Test your knowledge of the quiz-creators</Text>
        <Button onClick={handleClick}>Click to start</Button>
        {isStarted && <CurrentQuestion />}
      </StartContainer>
    </StartQuiz>
  );
}

export default Start;