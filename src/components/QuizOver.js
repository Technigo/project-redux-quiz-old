/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz'

export const QuizOver = () => {
  const answers = useSelector((state) => state.quiz.answers)
  // We use the useSelector hook to get the answers array from the redux store
  const dispatch = useDispatch()
  // We create a varible for the useDispatch hook

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }
  // The function above calls the restart function in the reducers using the useDispatch-hook /Annika
  return (
    <div>
      <p>You answered</p>
      {answers.map((answer, index) => (
        <div key={answer.questionId}>
          <h2>{index + 1}. {answer.question.questionText}</h2>
          <p>Your answer: {answer.answer}</p>
          <p>Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
        </div>
      ))}
      <h1>You answered {answers.filter((a) => a.isCorrect).length} out of {answers.length} questions correctly.</h1>
      <div>
        <button type="button" onClick={restartQuiz}>Restart quiz </button>
      </div>
    </div>
  )
}

//* In the return aboev we're mapping through the answers array and are returning the number of the question (the questionId +1 since the start of the index is 0), the questiontext, the user's answer and the correct answer using the correctAnswerIndex property. After that we are filtering the answers array to check how many answers were correct out of how many questions. /Annika