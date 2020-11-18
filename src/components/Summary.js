import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const Summary = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()

  const correctAnswers = answers.filter((answer) => {
    return answer.isCorrect === true
  })

  return (
    quizOver && (
      <section>
        <div>
          {correctAnswers.length} correct answers out of 5.
        </div>
        <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</button>
      </section>
    ))
}