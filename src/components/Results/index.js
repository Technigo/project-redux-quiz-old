import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';

import './results.css'

export const Results = () => {
  const dispatch = useDispatch()
  const questions = useSelector((store) => store.quiz.questions);
  const score = useSelector((store) => store.quiz.score);
  const quizOver = useSelector((store) => store.quiz.quizOver);

  const handleOnClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <>
      {quizOver
        ? (<section className="results-container">
          <h1>Your final result {score} of {questions.length}</h1>
          <button type="button" onClick={() => handleOnClick()}>Start again</button>
           </section>)
        : ''}
    </>
  )
}
