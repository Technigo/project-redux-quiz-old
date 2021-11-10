import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "../reducers/quiz"
import { BackgroundVideo } from "components/BackgroundVideo"

const Summary = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers)
  console.log("hello")

  return (
    <div>
      <h1>TEST</h1>
      <button onClick={() => dispatch(quiz.actions.restart())}>RESTART</button>
      {answers.map((answer) => (
        <div key={answer.question.questionText}>
          <p>
            {answer.question.questionText}
            <span>{answer.answer}</span>
            {answer.isCorrect ? "✅" : "❌"}
          </p>
          {!answer.isCorrect
            ? answer.question.options[answer.question.correctAnswerIndex]
            : ""}
        </div>
      ))}
    </div>
  )
}

export default Summary
