import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector } from 'react-redux'
import { RestartButton } from './Buttons'

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const correctAnswers = answers.filter(item => item.isCorrect)

  console.log(answers)

  return (
    <>
      <div>Summary</div>
      <div>
        {answers.map((item) => (
          <div key={item.answer}>
            <p>Question {item.questionId} "{item.question.questionText}", you answered: {item.answer}</p>
            {/* <p>{item.isCorrect ? "you were right" : "you were wrong"}</p> */}
            <p>{item.isCorrect ? `You were right, the answer was ${item.answer}!` : `You got it wrong, the answer wasn't ${item.answer}, it was ${item.question.options[item.question.correctAnswerIndex]}`}</p>
          </div>
        ))}
        {answers.length === 0 && (
          <div>You haven't answered any question!</div>
        )}
        <div>
          Your score is {correctAnswers.length}/{answers.length}
        </div>
      </div>
      <RestartButton />
    </>

  )
}
