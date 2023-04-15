import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { RestartButton } from './styled_components/buttons.js'

const SummaryContainer = styled.div`
  background-color: black;
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SummaryHeadline = styled.h1`
  color: white;
`;

const SummaryText = styled.p`
  color: white;
`;

export const QuizSummary = ({ onRestart }) => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    onRestart();
  };

  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;

  let message;
  if (correctAnswers === answers.length) {
    message = 'Wow impressive, you got everything right about AI!';
  } else if (correctAnswers === 0) {
    message = 'sorry no correct answers, you are doomed!! 🫠'
  } else {
    message = `You answered ${correctAnswers} out of ${answers.length} questions correctly.`
  }

  return (
    <SummaryContainer>
      <SummaryHeadline>Quiz Summary</SummaryHeadline>
      <SummaryText>{message}</SummaryText>
      <RestartButton onClick={handleRestart}>Restart Quiz</RestartButton>
    </SummaryContainer>
  );
};
