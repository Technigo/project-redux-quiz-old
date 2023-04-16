import React from 'react';
import styled from 'styled-components';
import RestartButton from './RestartButton'

const ResultsText = styled.h1`
padding-top: 30px;
  color: #564593;
  font-size: 30px;
`

export const Results = () => {
  return (
    <div>
      <ResultsText>Well done! Your score is...<br /><br />
      3 / 5
      </ResultsText>
      <RestartButton />
    </div>
  )
}