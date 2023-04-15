import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CurrentQuestion } from './CurrentQuestion';
import { Results } from './Results';

const QuizWrapper = styled.section`
margin: auto;
background-color: white;
border-radius: 10px;
padding: 20px;
width: 350px;
height: 500px;
display: flex;
flex-direction: column;
text-align: center;

z-index: 1;
  bottom: 10%;
  left: 10%; 
  right: 10%;
  height: 50%;
  display: flex;
  animation: myAnim 3s ease 0s 1 normal forwards;
`
const Gradient = styled.div`
 .gradient {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 255) 0%,
    rgb(7, 0, 0) 100%
  );
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgb(3, 0, 0) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgb(7, 0, 0) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgb(3, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgb(17, 0, 0) 100%
  );
  -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgb(13, 1, 1), endColorstr=rgb(0, 0, 0));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=rgb(25, 49, 49), endColorstr=rgb(7, 0, 0));
} `

export const Main = () => {
  const [score, setScore] = useState();
  const showResults = useSelector((state) => state.quiz.quizOver)

  return (
    <QuizWrapper>
      <Gradient />
      {!showResults && (<CurrentQuestion score={score} setScore={setScore} />)}
      {showResults && (<Results score={score} />)}
    </QuizWrapper>
  )
}