import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'

export const RestartButton = () => {
  const dispatch = useDispatch();
  const onButtonClick = () => { dispatch(quiz.actions.restart()) }
  return (
    <Btn type="button" onClick={onButtonClick}>Restart</Btn>
  )
}
const Btn = styled.button`
  border-style: double;
  border-color: black;
  padding: 10px;
  color: black;
  border-radius: 10px;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  border: solid 2px black; 
  width: 133px;
  background-color: #3d85c6;

  &:hover {
    background-color: black;
    color: #3d85c6;
    cursor: pointer;
    transform: scale(1.2);
    border-color:#3d85c6;
  }`