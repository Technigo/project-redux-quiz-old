import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextQuestionButton } from './NextQuestionButton';
import { Summary } from './Summary';
// import { MainContainer } from './StyledComponents';
import { quiz } from '../reducers/quiz';

export const Answers = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();

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
      <div>

        {question.options.map((item, index) => (
          <button
            className="btn option"
            type="submit"
            key={item}
            onClick={() => onAnswerSubmit(question.id, index)}>
            {item}
          </button>
        ))}
        <NextQuestionButton />
      </div>
    );
  }
};
