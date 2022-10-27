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
    <Button onClick={() => goToNextQuestion(question.id)} type="button"><b>Next question</b></Button>
  );
}

const Button = styled.button`
padding: 15px;
color: #4F4350;
border-radius: 15px;
font-size: 18px;
border: none;
margin: 10px;
width: 150px;
background-color:#D9B2DE;

&:hover {
  background-color:  #C371D2; 
  color: black;
}

`
