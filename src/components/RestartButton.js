import React from 'react'
/* import Styled from 'styled-components' */
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

const RestartButton = () => {
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <button type="button" onClick={handleRestart()}>Restart</button>
  )
}

export default RestartButton

