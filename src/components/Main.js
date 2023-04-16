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
width: 325px;
height: 500px;
display: flex;
flex-direction: column;
text-align: center;
box-shadow: 0px 5px 10px 0 rgba(89, 52, 96, 0.2), 0 6px 20px 0 rgba(135, 41, 113, 0.19);
`

export const Main = () => {
  const [score, setScore] = useState();
  const showResults = useSelector((state) => state.quiz.quizOver)

  return (
    <QuizWrapper>
      {!showResults && (<CurrentQuestion score={score} setScore={setScore} />)}
      {showResults && (<Results score={score} />)}
    </QuizWrapper>
  )
}