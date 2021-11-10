import React from 'react';
import './Button.css'
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';

const Button = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector(
    (state) => state.quiz.answers
    );

  const dispatch = useDispatch()

  const toNextQ = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  return (
    <div className="submit-button-container">
     <button className="submit-button" type="submit" disabled={question.id !== answer.length} onClick={toNextQ}
    >{question.id === 5 ? "See Score" : "Next"}</button>
    </div>
  )
}

export default Button

// onClick={question.id === (question.quanswers.length) +1 ? {toNextQ}} : disabled}


