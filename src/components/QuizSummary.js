import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { RestartButton } from './styled_components/buttons.js'

const SummaryHeadline = styled.h1`
color: black;
`

export const QuizSummary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
  };
  /* Calculate the number of correct answers : correctAnswers is calculated by
   filtering the answers array to only include correct answers */
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
    <div>
      <SummaryHeadline>Quiz Summary</SummaryHeadline>
      <p>{message}</p>
      <p>Hints used: {hintUsed}</p>
      <RestartButton onClick={handleRestart}>Restart Quiz</RestartButton>
    </div>
  )
}