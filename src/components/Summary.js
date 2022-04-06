import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Summary = () => {
  const answerCheck = useSelector((state) => state.quiz.answers)
  const correctAnswers = answerCheck.filter((answer) => answer.isCorrect) // Array.filter

  console.log('hej', answerCheck)

  const musicLoverWow = correctAnswers.length > 3

  return (
    <div>
      {
        // Conditional / Optional rendering
      }
      {musicLoverWow && <h2>WOw du elskar musik alltso</h2>}
      Du hade {correctAnswers.length}/{answerCheck.length} rätt.
    </div>
  )
}
