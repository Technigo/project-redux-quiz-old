/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';
import Results from './Results';
import { AnswerButton } from './Buttons/AnswerButtons';
import { Timer } from './timer/Timer';

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  const quizOver = useSelector((store) => store.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  if (quizOver === true) {
    return <Results />
  } else {
    return (
      <OptionsContainer>
        <h1>{question.questionText}</h1>
        <img src={question.imgUrl} alt="code" width="300px" />
        <Timer />
        <AnswerButton />
        <ProgressBar />
      </OptionsContainer>
    );
  }
}

const OptionsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border: solid 1px #0dc9e6;
border-radius: 20px;
height: 80vh;
width: 50%;
position: absolute;
top: 50px;
left: 310px;
`
