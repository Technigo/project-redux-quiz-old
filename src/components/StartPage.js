import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';

export const StartPage = () => {
  const dispatch = useDispatch()
  const start = useSelector((state) => state.quiz.quizStarted);

  return (
    <div>
      {!start ? <button type="button" onClick={() => dispatch(quiz.actions.startQuiz())}>Start</button>
        : <CurrentQuestion />}
    </div>
  )
}
