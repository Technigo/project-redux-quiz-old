import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch();

  const submitAnswer = ({ id, index }) => {
      dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const nextQuestion = () => { 
    dispatch(quiz.actions.goToNextQuestion())

  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <button onClick={submitAnswer}>Submit</button>
      <button onClick={nextQuestion}>Next question</button>
    </div>
  )
}
