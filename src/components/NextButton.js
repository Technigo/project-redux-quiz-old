import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
// import styled from 'styled-components/macro';

export const NextButton = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])

  const dispatch = useDispatch();

  const goToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion(question))
  }
  return (
    <button onClick={() => goToNextQuestion(question.id)} type="button">Next question</button>
  );
}
