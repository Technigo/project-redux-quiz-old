import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { StartPage } from './StartPage'
import { quiz } from 'reducers/quiz'

export const QuizEnd = () => {
  const dispatch = useDispatch()
  const selectedAnswer = useSelector((state) => state.quiz.answers)
  console.log(selectedAnswer)
  return (
    <div>
      <h1>This quiz is over! Please leave now.</h1>
      {selectedAnswer.map((item) => {
        return <p key={item.answer}>{item.isCorrect ? 'rätt' : 'fel'} {item.answer}</p>
      })}
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
    </div>
  )
}