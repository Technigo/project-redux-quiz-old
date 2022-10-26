import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Question = () => {
  const [disable, setDisabled] = useState(false);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch();
  console.log(question);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    setDisabled(true);

    setTimeout(() => {
      dispatch(quiz.actions.goToNextQuestion())
      setDisabled(false)
    }, 500);

    /* if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion())
    }  else {
      window.alert('sorry wrong answer')
    } */
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return <button disabled={disable} onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
      })}
    </div>
  )
}