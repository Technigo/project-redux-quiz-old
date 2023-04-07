import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  };

  if (!question) {
    return <h2>Oh no! I could not find the current question!</h2>
  }

  return (
    <div>
      <h2>Question: {question.questionText}</h2>
      <div className="answerWrapper">
        {question.options.map((answer) => {
          return (
            <button type="button" className="answer">{answer}</button>
          )
        })}
      </div>
      <button type="button" onClick={handleNextQuestion}>Next question</button>
    </div>
  )
}