import React from 'react'
import styled from 'styled-components'
import { QuestionBackground } from 'components/CurrentQuestion'

const SummaryStyling = styled.div`
    margin: 0;
    background-color: lightpink;
    height: 100vh;
    padding: 30px;
`

export const Summary = () => {
  return (
    <QuestionBackground>
      <SummaryStyling>
        <div>
          <h1>Good work! Here is your summary!</h1>
          <button type="button">Restart</button>
        </div>
      </SummaryStyling>
    </QuestionBackground>
  )
}