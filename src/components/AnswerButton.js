/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const AnswerButton = ({ index, option, setGoToNextButton }) => {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(false);

  // Gets all question in the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // Gets the answers the user has given
  const usersAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }));
    if (question.correctAnswerIndex === answerIndex) {
      window.alert('Yay YOU!')
      dispatch(quiz.actions.goToNextQuestion())
    } else {
      window.alert('Wrong answer!')
    }
    setActiveBtn(true);
    setGoToNextButton(true);
  }

  const correctAnswer = usersAnswer && index === question.correctAnswerIndex;

  return (
    /* If activeBtn is true, it checks whether the answer is correct or incorrect based on the correctAnswer variable.
    If correctAnswer is true, it sets the class to 'correct', which applies the appropriate styles to indicate a correct answer.
    If correctAnswer is false, it sets the class to 'wrong', which applies the appropriate styles to indicate an incorrect answer.
    If activeBtn is false, it sets the class to 'default', which applies the default styles to the button.  */
    <button
      className={activeBtn ? (correctAnswer ? 'correct' : 'wrong') : 'default'}
      onClick={() => onAnswerSubmit(question.id, index)}
      disabled={usersAnswer}
      type="button">
      {option}
    </button>
  );
};
