
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { QuizOver } from './QuizOver';
import { StyledQuestionText } from './StyledTexts';

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

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const gameOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();

  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));

    setTimeout(displayNextQuestion, 500)
  }

  if (!question) {
    return (
      <h1>Oh no! I could not find the current question!</h1>
    )
  }

  return (
    <div>
      {!gameOver ? (
        <QuestionsContainer>
          <StyledQuestionText>{question.id} Question: {question.questionText}</StyledQuestionText>
          <div>
            {question.options.map((option, index) => (
              <button key={index} type="submit" onClick={() => onAnswerSubmit(question.id, index)}>{option}</button>
            ))}
          </div>
        </QuestionsContainer>
      ) : <QuizOver />}
    </div>
  )
};