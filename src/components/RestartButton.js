import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components/macro';

export const StyledRestartButton = styled.a`
    position: relative;
    background-color: #E3182B;
    color: white;
    font-family: 'Montserrat';
    font-size: 1.25vw;
    letter-spacing: 0.1vw;
    font-weight: bold;
    padding: 10px 30px;
    border-radius: 50px;
    top: 20px; 

    :hover {
    background-color: #9d1f14;
  }
`

const RestartButton = () => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <StyledRestartButton
        type="button"
        onClick={onRestart}>
            RESTART
      </StyledRestartButton>
    </div>
  )
}

export default RestartButton;