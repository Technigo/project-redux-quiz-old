import React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"
import { useSelector } from "react-redux"

import { quiz } from "../reducers/quiz"

export const ProgressBar = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  )

  return (
    <div>
      <ProgressBar now={question} label={`${question}%`} />
    </div>
  )
}

// this is just a experimental progressbar I played with! it's not imported anywhere yet :)
