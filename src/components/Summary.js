import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { QuestionBackground } from 'components/CurrentQuestion'
import { quiz } from 'reducers/quiz'

const SummaryStyling = styled.div`
    margin: 0;
    background-color: lightpink;
    height: 100vh;
    padding: 30px;
`

export const Summary = () => {
  const dispatch = useDispatch()

  const onRestartButton = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <QuestionBackground>
      <SummaryStyling>
        <div>
          <h1>Good work! Here is your summary!</h1>
          <button type="button" onCli>Restart</button>
        </div>
      </SummaryStyling>
    </QuestionBackground>
  )
}