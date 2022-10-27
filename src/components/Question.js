/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { ProgressBar } from './ProgressBar';

export const Question = () => {
  const [disabled, setDisabled] = useState(false);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => (a.questionId === question.id))
  )
  const dispatch = useDispatch();
  console.log(question);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    setDisabled(true);

    if (question.correctAnswerIndex === answerIndex) {
      <h1>You are super right</h1>
    } else {
      <h1>No loser</h1>
    }

    setTimeout(() => {
      dispatch(quiz.actions.goToNextQuestion())
      setDisabled(false)
    }, 500);
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return <button disabled={disabled} onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
      })}
      <h2>{!answer ? null : answer.isCorrect ? <h2>correct</h2> : <h2>wrong</h2>}</h2>
      <ProgressBar />
    </div>
  )
}