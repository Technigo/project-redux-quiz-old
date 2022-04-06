import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'

export const CurrentQuestion = () => {
  const [answer, setAnswer] = useState('')

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const quizOver = useSelector((store) => store.quiz.quizOver)

  const dispatch = useDispatch()

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
      <h1>{question.questionText}</h1>
      <h2>{0 + question.id}/5</h2>

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
        Submit Answer
      </button>
    </div>
  )
}
