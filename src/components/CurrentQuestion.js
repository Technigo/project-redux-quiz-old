import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'

export const CurrentQuestion = () => {
  const [answer, setAnswer] = useState('')

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const store = useSelector((state) => state)
  const quizOver = useSelector((store) => store.quiz.quizOver)

  const dispatch = useDispatch()

  // const onAnswerSubmit = (id, index) => {}

  const goToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setAnswer('')
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: answer,
      })
    )
  }

  if (quizOver === true) {
    return <Summary />
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const shouldShow = answer === 0 || answer === 1 || answer === 2
  const isCorrectAnswer = question.correctAnswerIndex === answer

  return (
    <div>
      <h1>Question: {question.questionText}</h1>

      {
        // example of optional rendering
        // tenerary operator
        // condition ? true : false
      }
      {shouldShow && (
        <h1>{isCorrectAnswer ? 'Raett svar' : 'Fel svar, haha!'}</h1>
      )}

      {!shouldShow &&
        question.options.map((item, index) => {
          return (
            <button type='button' onClick={() => setAnswer(index)} key={item}>
              {item}
            </button>
          )
        })}
      <button className='next-btn' onClick={() => goToNextQuestion()}>
        Next question
      </button>
    </div>
  )
}
