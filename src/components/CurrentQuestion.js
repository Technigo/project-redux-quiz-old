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
      <ParentWrapper>
        <OptionsContainer>
          <QuestionH1>{question.questionText}</QuestionH1>
          <QImg src={question.imgUrl} alt="code" width="300px" />
          <AnswerButton />
          <ProgressBar />
          <Timer />
        </OptionsContainer>
      </ParentWrapper>
    );
  }
}

const ParentWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: black;
`

const OptionsContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid rgb(13, 201, 230);
    border-radius: 20px;
    height: 95%;
    width: 80%;
    background-color: black;
    justify-content: space-around;
`

const QuestionH1 = styled.h1`
color:#3d85c6;
width: 65%;
`

const QImg = styled.img`
width: 300px;
height: 240px;


  &:hover {
    transform: scale(1.1);
  }
`