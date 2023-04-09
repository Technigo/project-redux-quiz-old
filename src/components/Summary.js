import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';

const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;

  return (
    <div>
      <p>You got {correctAnswers} answers out of 6 correct!</p>
      <button type="button" onClick={dispatch(quiz.actions.restart())}>Restart</button>
    </div>
  )
};

export default Summary;