import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import styled from 'styled-components';

const AnswerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row;
  padding: 10px 0px 40px 0px;
`;
const AnswerButton = styled.button`
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: 0;
`;

export const CurrentQuestion = ({ question, usersAnswer }) => {
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <section className='main-container'>
      <h1 className='category-label'> Category: {question.category}</h1>
      <h2>
        Question {question.id}: {question.questionText}
      </h2>

      <AnswerWrapper>
        {question.options.map((option, index) => (
          <AnswerButton
            disabled={usersAnswer}
            key={option.id}
            onClick={() => onAnswerSubmit(question.id, index)}
          >
            {option.answer}
          </AnswerButton>
        ))}
      </AnswerWrapper>
      {usersAnswer?.isCorrect && <p>Correct!</p>}
      {usersAnswer?.isCorrect === false && <p>Incorrect!</p>}
    </section>
  );
};
