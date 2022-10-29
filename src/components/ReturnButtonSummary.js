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
    <Button onClick={() => restart(question.id)} type="button"><b>Restart</b></Button>
  );
}

const Button = styled.button`
padding: 10px 2px 10px 0px;
align-items: center;
justify-content: center;
text-align: center;
color: whitesmoke;
border-radius: 10px;
font-size: 12px;
text-transform: uppercase;
margin: 15px 0 -8px 17px;
height: 75px;
width: 75px;
border-radius: 50%;
border: solid 2px #ED8DD6;
background-color:#F090D9;
border: none;
&:hover {
  background-color: #F090D9; 
  color: whitesmoke;
}

@media (min-width: 668px) {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: solid 2px #ED8DD6;
  position: absolute;
  top: 25px;
  font-size: 13px;
}

@media (min-width: 1025px) {
  padding: 20px;
  color: whitesmoke;
  border-radius: 15px;
  font-size: 18px;
  margin: 10px 0 0 50px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: solid 4px #ED8DD6;
  position: absolute;
  top: 35px;
}
}
`