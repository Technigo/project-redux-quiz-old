import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { quiz } from "reducers/quiz"

export const Summary = () => {
  const CheckAnswers = useSelector(
    (store) =>
      store.quiz.answers.filter((answer) => answer.isCorrect === true).length
  )

  const dispatch = useDispatch()

  // Picked up the restart funtion from Quiz.js and put it in a button onClick -> see line: 23! 👇
  const restart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <section>
      <h1>yay! you completed the quiz!</h1>{" "}
      {`you had ${CheckAnswers} out of 5 correct answers! Good job!`}
      <button onClick={restart}>Restart</button>
    </section>
  )
}
