/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const AnswerButton = ({ index, option, setGoToNextButton }) => {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(false);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const usersAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }));
    if (question.correctAnswerIndex === answerIndex) {
      window.alert('High five!')
      dispatch(quiz.actions.goToNextQuestion())
    } else {
      window.alert('Sorry :( !')
    }
    setActiveBtn(true);
    setGoToNextButton(true);
  }

  const correctAnswer = usersAnswer && index === question.correctAnswerIndex;

  return (
    <button
      className={activeBtn ? (correctAnswer ? 'correct' : 'wrong') : 'default'}
      onClick={() => onAnswerSubmit(question.id, index)}
      disabled={usersAnswer}
      type="button">
      {option}
    </button>
  );
};