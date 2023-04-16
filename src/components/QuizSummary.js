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
 
`;

const SummaryHeadline = styled.h1`
  color: white;
`;

const SummaryText = styled.p`
  color: white;
  padding:15%;
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
      <p>Hints used: {hintUsed}</p>
      <RestartButton onClick={handleRestart}>Restart Quiz</RestartButton>
    </SummaryContainer>
  );
};
