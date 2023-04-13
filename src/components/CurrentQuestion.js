
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { QuizOver } from './QuizOver';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const gameOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();

  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));

    setTimeout(displayNextQuestion, 500)
  }

  if (!question) {
    return (
      <h1>Oh no! I could not find the current question!</h1>
    )
  }

  return (
    <main>
      {!gameOver ? (
        <div>
          <h1>Question: {question.questionText}</h1>
          <div>
            {question.options.map((option, index) => (
              <button key={index} type="submit" onClick={() => onAnswerSubmit(question.id, index)}>{option}</button>
            ))}
          </div>
        </div>
      ) : <QuizOver />}
    </main>
  )
};