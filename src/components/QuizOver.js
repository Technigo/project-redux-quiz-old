/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Link } from 'react-router-dom';
import { StyledParagraphText, StyledQuestionText } from 'components/StyledTexts';

export const QuestionsContainer = styled.div`
background: #FFD93D;
justify-content: center;
height: 100%;
width: 250px;
color: #FFD93D;
text-align: center;
border-radius: 15px;
padding: 20px;
margin: 20px;

@media (min-width: 668px) {
  width: 400px;
  margin-top: 20px;
}
`;

export const QuizOver = () => {
  const answers = useSelector((state) => state.quiz.answers)
  // We use the useSelector hook to get the answers array from the redux store
  const dispatch = useDispatch()
  // We create a varible for the useDispatch hook

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }
  // The function above calls the restart function in the reducers using the useDispatch-hook /Annika
  return (
    <QuestionsContainer>
      <p>You answered</p>
      {answers.map((singleAnswer, index) => (
        <div key={singleAnswer.questionId}>
          <StyledQuestionText>{index + 1}. {singleAnswer.question.questionText}</StyledQuestionText>
          <StyledParagraphText>Your answer: {singleAnswer.answer}</StyledParagraphText>
          <StyledParagraphText>Correct answer: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}</StyledParagraphText>
        </div>
      ))}
      <h1>You answered {answers.filter((a) => a.isCorrect).length} out of {answers.length} questions correctly.</h1>
      <div>
        <Link to="/">
          <button type="button" onClick={restartQuiz}>Restart Quiz</button>
        </Link>
      </div>
    </QuestionsContainer>
  )
}

// In the return above we're mapping through the answers array and are returning the number of the question (the question.index +1 since the start of the index is 0), the questiontext, the user's answer and the correct answer using the correctAnswerIndex property. After that we are filtering the answers array to check how many answers were correct out of how many questions.

// The Last thing that is displayed is a link that has a button inside it that brings you back to the WelcomPage-component. /Annika