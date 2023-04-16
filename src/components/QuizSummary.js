import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { RestartButton } from './styled_components/buttons.js'

const SummaryContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  text-align: center;
  margin: 0 auto;
  padding-top:50%;

  @media (min-width: 667px) {
    padding-top: 25%;
  }

  @media (min-width: 1024px) {
    padding-top: unset;
  }
`;

const SummaryHeadline = styled.h1`
  color: white;
  margin: unset;
  padding-top: 10%;

  @media (min-width: 667px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const SummaryText = styled.p`
  color: white;
  padding:15%;

  @media (min-width: 667px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
  padding: 5%;
  font-size: 1.8rem;
}
`;

export const QuizSummary = ({ onRestart }) => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    onRestart();
  };

  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const hintUsed = useSelector((state) => state.quiz.hintsUsed)

  let message;
  if (correctAnswers === answers.length) {
    message = 'Wow impressive ⭐! You are an AI-genius!';
  } else if (correctAnswers === 0) {
    message = 'Sorry no correct answers, you are doomed!! 🫠'
  } else if (correctAnswers === 1) {
    message = 'Some more training is needed before you become an AI-genius';
  } else if (correctAnswers === 2) {
    message = 'Keep the spirits up and do some more research. You can do it!';
  } else if (correctAnswers === 3) {
    message = 'More than half of the answers right, well done!';
  } else {
    message = 'Wow, so close this time! Almost a champion!'
  }

  return (
    <SummaryContainer>
      <SummaryHeadline>Quiz Summary</SummaryHeadline>
      <SummaryText>{message}
        <p>You answered {correctAnswers} out of {answers.length} questions correctly.</p>
        <p>Hints used: {hintUsed}</p>
      </SummaryText>
      <RestartButton onClick={handleRestart}>Restart Quiz</RestartButton>
    </SummaryContainer>
  );
};
