import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Summary } from '../components/Summary'
import { quiz } from '../reducers/quiz';

export const SummaryPage = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const correctAnswers = answers.filter((answer) => answer.isCorrect)
  const dispatch = useDispatch();

  const onRestartClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <p>SUMMARY</p>
      <Summary />
      <p>You had {correctAnswers.length}/5 correct answers</p>
      <button onClick={onRestartClick} type="button">Restart</button>
    </div>
  )
};