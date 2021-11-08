import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const checkAnswer = useSelector(
    (state) => state.quiz.answers[state.quiz.isCorrect]
  )
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: id, answerIndex: index }),
      index === question.correctAnswerIndex ? <p>Correct!</p> : <p>Incorrect</p>
    )
    console.log('correct answer:', question.correctAnswerIndex)
    console.log('chosen answer:', index)
  }

  const onNextQuestionSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  // {
  //   checkAnswer && <p>Correct!</p>
  // }
  // {
  //   !checkAnswer && <p>Incorrect!</p>
  // }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => (
        <button
          key={option.id}
          onClick={() => onAnswerSubmit(question.id, index)}
        >
          {option.answer}
        </button>
      ))}
      <p>{question.correctAnswerIndex}</p>
      <button onClick={() => onNextQuestionSubmit(question.id)}>Next</button>
    </div>
  )
}
