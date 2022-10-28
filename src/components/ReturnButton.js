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
padding: 8px;
color: whitesmoke;
border-radius: 10px;
font-size: 11px;
border: solid 1px #A27DA7;
// margin: 7px 0px 0px 20px;
 margin: auto;
 margin-top: 10px;
width: 118px;
background-color:#D9B2DE;
&:hover {
  background-color: #C371D2; 
  color: whitesmoke;
}

@media (min-width: 1025px) {
padding: 15px;
color: whitesmoke;
border-radius: 15px;
font-size: 18px;
border: none;
margin: 10px;
width: 150px;
}
`