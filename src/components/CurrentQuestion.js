import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import Summary from './Summary.js';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => (a.questionId === question.id))
  );

  if (quizOver) {
    return (<Summary />)
  }

  if (!question) {
    return <h2>Oh no! I could not find the current question!</h2>
  }

  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  };

  const handleAnswer = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    if (question.correctAnswerIndex === answerIndex) {
      document.getElementById(`${answerIndex}`).style.background = 'green'
    } else {
      document.getElementById(`${answerIndex}`).style.background = 'red'
    }
    setTimeout(nextQuestion, 1000)
  };

  const questionNr = question.id;

  return (
    <CardWrapper>
      <QuizWrapper>
        <TheQuestion>{question.questionText}</TheQuestion>
        <AnswerWrapper>
          {question.options.map((option, index) => {
            return (
              <AnswerOptions
                type="button"
                className={answer ? 'disabled-true' : 'disabled-false'}
                disabled={answer}
                id={index}
                key={option}
                onClick={() => handleAnswer(question.id, index)}>
                {option}
              </AnswerOptions>
            )
          })}
        </AnswerWrapper>
        <Tracker>Question {questionNr} / 6</Tracker>
      </QuizWrapper>
    </CardWrapper>
  )
};

const CardWrapper = styled.section`
  background: #1b4f69;
  box-shadow:  15px 15px 40px #143b4f, -15px -15px 40px #216181;
  padding: 25px;
  margin-top: 20%;
`;

const QuizWrapper = styled.div`
  border: 1px solid;
  background-color: white;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const TheQuestion = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
  text-transform: uppercase;
  width: 90%;
`;

const AnswerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 70%;
  margin: 20px 0;

  @media (min-width: 667px) {
    grid-template-columns: repeat(2, 50%);
  }
`;

const AnswerOptions = styled.button`
  padding: 20px 0;
  border-radius: 10px;
  border: none;
  background-color: #1b4f69;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`;

const Tracker = styled.p`
  font-size: 16px;
  color: #1b4f69;
  text-transform: uppercase;
`;