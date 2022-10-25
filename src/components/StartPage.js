import React from 'react'
// import { useDispatch } from 'react-redux'
// import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';

export const StartPage = () => {
//   const dispatch = useDispatch();
//   const quizStarted = useSelector((state) => state.quiz.start)
  const startBtn = () => {
    return <CurrentQuestion />
  }

  return (
    <div><h1>Hello</h1>
      <button type="button" onClick={startBtn}>Start</button>
    </div>
  )
}