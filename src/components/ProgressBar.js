/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux';

export const Progressbar = () => {
  const step = useSelector((store) => store.quiz.currentQuestionIndex + 1)
  console.log(step)
  return (
    <div className="progress-bar">
      <label htmlFor="progress"> {step === 6 ? 'Finished!' : `Question ${step}/5`} </label>
      <progress
        id="progress"
        tabIndex="-1"
        max="5"
        value={step} />
    </div>
  )
}
