import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
// import styled from 'styled-components/macro';

export const ReturnButton = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(quiz.actions.restart(question))
  }
  return (
    <button onClick={() => restart(question.id)} type="button">Restart quiz!</button>
  );
}

