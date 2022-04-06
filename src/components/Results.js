import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import { quiz } from "reducers/quiz"

export const Results = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch();
  console.log(answers)

  return (
    <>
    <div>
      {answers.map(answer => (
        <div key={answer.question.id}>
          <h2>Correct Answer: {answer.question.options[answer.question.correctAnswerIndex]}</h2>
          <p>Your Answer: {answer.answer}</p>
        </div>
      ))}
    </div>
      <button onClick={() => dispatch(quiz.actions.restart())}></button>
    </>
  )
}
