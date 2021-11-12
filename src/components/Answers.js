import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NextQuestionButton } from './NextQuestionButton';
import { Summary } from './Summary';
// import { MainContainer } from './StyledComponents';
import { quiz } from '../reducers/quiz';

export const Answers = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) => state.quiz.answers.find((a) => ( a.questionId === question.id // question could come from the previous selector in the last example
    )))

  const playerAnswer = useSelector((state) => state.quiz.answerIndex)

  const quizOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();

  // const playerName = useSelector((state) => state.quiz.userName);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  if (quizOver === true) {
    return <Summary />;
  } else {
    return (
      <div className="buttons">
        <div className="options">
          {question.options.map((item, index) => (
            <button
              className="btn option"
              type="submit"
              key={item}
              onClick={() => onAnswerSubmit(question.id, index)}
            >
              {item}
            </button>
          ))}
        </div>
        <NextQuestionButton />
      </div>
    );
  }
};
