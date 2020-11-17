import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Summary } from './Summary';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch();

  const submitAnswer = ({ id, index }) => {
      dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const nextQuestion = () => { 
    dispatch(quiz.actions.goToNextQuestion())
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>

  } else if (quizOver === true){
    return <Summary />
    
  } else {
    return (
      <div>
        <h1>Question: {question.questionText}</h1>
        <button onClick={submitAnswer}>Submit</button>
        <button onClick={nextQuestion}>Next question</button>
      </div>
    );
  };
};
