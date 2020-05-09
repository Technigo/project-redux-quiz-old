import React from 'react'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from './CurrentQuestion'
import { QuizStart } from './QuizStart'



export const Container = () => {
  const start = useSelector((state) => state.quiz.quizStart)

  return (
    <>
      {start ? <CurrentQuestion /> : <QuizStart />}
    </>
  )
}
