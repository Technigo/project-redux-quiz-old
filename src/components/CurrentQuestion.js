
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((options, index) => (
          <button key={index} type="submit" onClick={() => { onAnswerSubmit(question.id, index); }}>{options}</button>
        ))}
      </div>
      <div>
        <button type="submit" onClick={handleNextQuestion}>Next Question</button>
      </div>
    </div>
  )
}
