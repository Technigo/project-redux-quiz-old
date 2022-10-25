import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const numOfAnswers = answers.length;
  const dispatch = useDispatch();
  return (
    <>
      <p>You got {correctAnswers} correct answers out of {numOfAnswers}</p>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</button>
    </>
  );
};