import React from "react"
import { QuizQuestions } from "./QuizQuestions"
import { useSelector } from "react-redux"

import { Results } from "./Results"

export const QuizCards = () => {
  const quizIsOver = useSelector(state => state.quiz.quizOver === true)

  return (
    <>
      {!quizIsOver && <QuizQuestions />}
      {quizIsOver && <Results />}
    </>
  )
}

