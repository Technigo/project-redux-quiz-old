/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RestartButton } from './Buttons/RestartButton';
import matrix from '../assets/matrix.jpg'

const Results = () => {
  const answers = useSelector((store) => store.quiz.answers)
  // const questions = useSelector((store) => store.quiz.questions)

  const correctAnswers = answers.filter((item) => item.isCorrect)

  const [scorePercent, setScorePercent] = useState(0);

  useEffect(() => {
    // Update scorePercent state variable
    const newScorePercent = (correctAnswers.length * 100) / answers.length;
    setScorePercent(newScorePercent);
  }, [answers, correctAnswers]);
  const quizOver = useSelector((store) => store.quiz.quizOver);
  console.log(quizOver)
  console.log(scorePercent)

  const grade = () => {
    return scorePercent >= 90 ? 'You are smashing this bootcamp A!'
      : scorePercent >= 80 ? 'Well done you got a B!'
        : scorePercent >= 70 ? 'Such a nice middle of the curve type student its a C for you.'
          : scorePercent >= 60 ? 'Who says guessing cant get you a passing grade?'
            : scorePercent >= 50 ? 'Sadly a chimpanzee randomly poking at a keyboard could do better'
              : scorePercent >= 40 ? 'unspeakable. Should we pretend that didnt happen and you try again?'
                : <p>what? Lets give it another try shall we????</p>
  }
  return (
    <ResultsContainer>
      <ResultsH1>Your grade was {grade()}</ResultsH1>
      <ResultsH3>Score: {correctAnswers.length}/{answers.length}</ResultsH3>
      <RestartButton />
    </ResultsContainer>
  )
}

export default Results;

const ResultsContainer = styled.div`
background-image: url(${matrix});
background-size: cover;
display: flex;
text-align: center;
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

