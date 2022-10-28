import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import styled from 'styled-components/macro';

export const ReturnButton = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(quiz.actions.restart(question))
  }
  return (
    <Button onClick={() => restart(question.id)} type="button"><b>Restart quiz</b></Button>
  );
}

const Button = styled.button`
padding: 10px;
align-items: center;
justify-content: center;
text-align: center;
color: #67456C;
border-radius: 10px;
font-size: 12px;
margin: 5px 0 0 10px;
border: none;
width: auto;
background-color:#D9B2DE;
&:hover {
  background-color: #C371D2; 
  color: whitesmoke;
}

@media (min-width: 1025px) {
padding: 15px;
color: #4F4350;
border-radius: 15px;
font-size: 18px;
border: none;
margin: 20px;
width: auto;
}
`