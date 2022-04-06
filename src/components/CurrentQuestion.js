import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const store = useSelector((state) => state)
  console.log(store)
  const quizOver = useSelector((store) => store.quiz.quizOver)

  const dispatch = useDispatch()

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))

    if (question.correctAnswerIndex === index) {
      dispatch(quiz.actions.goToNextQuestion())
    }
    if (quizOver === true) {
      // return <Summary /> Det sista vi gjorde, vet ej om det ska va kvar.
    }
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => {
        return (
          <button onClick={() => onAnswerSubmit(question.id, index)} key={item}>
            {item}
          </button>
        )
      })}
    </div>
  )
}
