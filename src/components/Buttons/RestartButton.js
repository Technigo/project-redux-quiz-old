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
font-size:18px;`