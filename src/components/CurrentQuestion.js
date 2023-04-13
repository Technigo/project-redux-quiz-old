/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';
import Results from './Results';
import { AnswerButton } from './Buttons/AnswerButtons';

export const CurrentQuestion = (props) => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  // select the question from the store that has the index of currentQuestionIndex
  const wholeStore = useSelector((store) => store);
  console.log(wholeStore);
  const [guessedAnswerIndex, setGuessedAnswerIndex] = useState('');
  const [wrongGuessesCount, setWrongGuessesCount] = useState(0);
  console.log('wholeStore', wholeStore);
  console.log('question', question);
  const { setScore, score } = props;
  console.log(setScore);
  console.log(score);
  console.log(guessedAnswerIndex, setGuessedAnswerIndex, wrongGuessesCount, setWrongGuessesCount);
  const quizOver = useSelector((store) => store.quiz.quizOver);

  const notUpdateByReducerQuestion = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  console.log(notUpdateByReducerQuestion)

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
