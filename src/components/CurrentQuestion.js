import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => (a.questionId === question.id))
  );

  const handleAnswer = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    if (question.correctAnswerIndex === answerIndex) {
      document.getElementById(`${answerIndex}`).style.background = 'green'
    } else {
      document.getElementById(`${answerIndex}`).style.background = 'red'
    }
  };

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  };

  if (!question) {
    return <h2>Oh no! I could not find the current question!</h2>
  }

  return (
    <section className="quizWrapper">
      <h2>{question.questionText}</h2>
      <div className="answerWrapper">
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
      </div>
      <button type="button" onClick={handleNextQuestion}>Next question</button>
      <p>Question: /6</p>
    </section>
  )
}

const AnswerOptions = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: rgb(181, 135, 251);
  opacity: 0.8;
  color: white;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    opacity: 1;
  }
`;