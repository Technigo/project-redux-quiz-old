import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { StyledButton } from './ReusableStyles.js'

const RestartButton = () => {
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <StyledButtonCloned type="button" onClick={() => handleRestart()}><p>Restart</p></StyledButtonCloned>
  )
}

export default RestartButton

const StyledButtonCloned = styled(StyledButton)`
width: 7rem;
`

