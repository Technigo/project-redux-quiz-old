
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { QuizOver } from './QuizOver';
import { StyledQuestionText } from './StyledTexts';
import { StartButton } from './Button';

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
  // eslint-disable-next-line max-len
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))

  const changeColorBtn = (index) => {
    if (!answer) {
      return '#FF8400'
    } else {
      if (question.correctAnswerIndex === index) {
        return '#6DD627'
      }
      return 'red'
    }
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));

    setTimeout(displayNextQuestion, 1000)
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
          <StyledQuestionText>{question.id}. {question.questionText}</StyledQuestionText>
          <div className="answerSection">
            {question.options.map((option, index) => (
              <StartButton button key={index} border={changeColorBtn(index)} type="submit" onClick={() => onAnswerSubmit(question.id, index)}>{option}</StartButton>
            ))}
          </div>
        </QuestionsContainer>
      ) : <QuizOver />}
    </div>
  )
};