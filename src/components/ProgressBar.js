import React from 'react'
import { useSelector } from 'react-redux'

export const ProgressBar = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  return (
    <div>
      <label htmlFor="progress">{question.id} / 6
      </label>
      <progress
        id="progress"
        value={question.id}
        max="7" />
    </div>
  )
}