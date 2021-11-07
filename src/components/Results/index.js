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

  const percentage = (score * 100) / questions.length

  return (
    <>
      {quizOver
        ? (<section className="results-container">
          <h1 className="results-text">Your final result is: </h1>
          <h1 className="results-text">{score} of {questions.length} = {percentage}%</h1>

          <h1 className="results-message"> {percentage <= '50' ? 'Continue studiyng and exploring nature!' : 'You are a great nature fan, congratulations!'}</h1>
          <button className="results-button" type="button" onClick={() => handleOnClick()}>Start again</button>
        </section>)
        : ''}
    </>
  )
}
