/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledParagraphText, StyledQuestionText, StyledWelcomeText } from 'components/StyledTexts';
import { StartButton } from 'components/Button';
import { quiz } from 'reducers/quiz';

export const QuestionsContainer = styled.div`
background: #FFD93D;
justify-content: center;
height: 100%;
width: 250px;
color: #FFD93D;
text-align: center;
border-radius: 15px;
padding: 20px;
margin-top: 20px;
margin-bottom: 60px;
position: relative;
display: flex;
flex-direction: column;
gap: 20px;

@media (min-width: 668px) {
  width: 500px;
  margin-top: 20px;
}

@media (min-width: 1024px) {
  width: 900px;
  margin-top: 40px;
  
}
`;
export const QuizOver = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()
  // We create a varible for the useDispatch hook

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }
  // The function above calls the restart function in the reducers using the useDispatch-hook /Annika
  return (
    <QuestionsContainer>
      <StyledWelcomeText>Here is your result</StyledWelcomeText>
      {answers.map((singleAnswer, index) => (
        <div key={singleAnswer.questionId}>
          <StyledQuestionText>{index + 1}. {singleAnswer.question.questionText}</StyledQuestionText>
          <StyledParagraphText>
            Your answer: {singleAnswer.answer}
            <br />
            Correct answer: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}
          </StyledParagraphText>
        </div>
      ))}
      <StyledParagraphText>You answered {answers.filter((a) => a.isCorrect).length} out of {answers.length} questions correctly.</StyledParagraphText>
      <div>
        <Link to="/">
          <StartButton type="button" onClick={restartQuiz} height>Restart Quiz</StartButton>
        </Link>
      </div>
    </QuestionsContainer>
  )
}
// In the return above we're mapping through the answers array and are returning the number of the question (the questionId +1 since the start of the index is 0), the questiontext, the user's answer and the correct answer using the correctAnswerIndex property. After that we are filtering the answers array to check how many answers were correct out of how many questions.
// The Last thing that is displayed is a link that has a button inside it that brings you back to the WelcomPage-component. /Annika