/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ResultsContainer = styled.div`
background-color: black;
background-size: cover;
`
const ResultsH1 = styled.h1`
color:white;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size:3rem;
text-align:center;
`
const ResultsH3 = styled.h3`
color:white;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size:3rem;
text-align:center;
`;

const Results = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const correctAnswers = answers.filter((item) => item.isCorrect)
  const scorePercent = (correctAnswers.length * 100) / answers.length;

  const quizOver = useSelector((store) => store.quiz.quizOver);
  console.log(quizOver)

  const grade = () => {
    return scorePercent >= 90 ? 'You are smashing this bootcamp A!'
      : scorePercent >= 80 ? 'Well done you got a B!'
        : scorePercent >= 70 ? 'Such a nice middle type student its a C for you.'
          : scorePercent >= 60 ? 'Who says guessing cant get you a passing grade?'
            : scorePercent >= 50 ? 'Sadly a chimpanzee randomly poking at a keyboard could do better'
              : 'unspeakable. Should we pretend that didnt happen and you try again?'
  }

  return (
    <ResultsContainer>
      <ResultsH1>Your grade was {grade()}</ResultsH1>
      <ResultsH3>Score: {correctAnswers.length}/{answers.length}</ResultsH3>
    </ResultsContainer>
  )
}

export default Results;