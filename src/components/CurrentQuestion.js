/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const dispatch = useDispatch();

  const handleAnswerClick = (answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex }));

    setTimeout(() => {
      dispatch(quiz.actions.goToNextQuestion());
    }, 1500); // Delays the rendering of the next question after a button has been clicked
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((optionText, optionIndex) => (
          <button type="button" key={optionText} onClick={() => handleAnswerClick(optionIndex)}>
            {optionText}
          </button>
        ))}
      </div>
    </div>
  );
};
