import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RestartButton from './RestartButton';

const ResultsText = styled.h1`
padding-top: 30px;
  color: #564593;
  font-size: 30px;
`

export const Results = () => {
  const answers = useSelector((state) => state.quiz.answers)

  return (
    <div>
      <ResultsText>Well done! Your score is...<br /><br />
        {answers.filter((a) => a.isCorrect).length} / {answers.length}
      </ResultsText>
      <RestartButton />
    </div>
  )
}