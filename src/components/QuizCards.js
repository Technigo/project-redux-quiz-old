import React from "react"
import { QuizQuestions } from "./QuizQuestions"
import { useSelector } from "react-redux"

import { Results } from "./Results"

export const QuizCards = () => {
  const quizIsOver = useSelector(state => state.quiz.quizOver);

  return (
    <>
      {quizIsOver ? <Results /> : <QuizQuestions /> }
    </>
  )
};

