import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import styled from 'styled-components/macro';

export const NextButton = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])

  const dispatch = useDispatch();

  const goToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion(question))
  }
  return (
    <Button onClick={() => goToNextQuestion(question.id)} type="button"><b>Next</b></Button>
  );
}

const Button = styled.button`
  padding: 8px;
  color: whitesmoke;
  border-radius: 10px;
  font-size: 11px;
  border: none;
  margin: auto;
  margin-top: 10px;
  width: 118px;
  background-color:#A27DA7;
  &:hover {
    background-color: #C371D2; 
    color: whitesmoke;
  }

@media (min-width: 668px) {
  padding: 15px;
  color: whitesmoke;
  border-radius: 15px;
  font-size: 14px;
  border: none;
  margin: 10px;
  width: 120px;
  }

  @media (min-width: 1024px) {
    padding: 15px;
    color: whitesmoke;
    border-radius: 15px;
    font-size: 17px;
    border: none;
    margin: 10px;
    width: 150px;
  }
`
