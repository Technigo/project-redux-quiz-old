/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'

export const CorrectAnswer = () => {
  // const correctAnswers = useSelector((store) => store.quiz.questions.correctAnswerIndex)
  const answerArray = useSelector((store) => store.quiz.questions.options)
  console.log('answerarray', answerArray)

  return (
    <>
      {answerArray.map((correct) => {
        return (
          <p key={correct.index}>{correct}</p>
        )
      })}
    </>
  )
}
