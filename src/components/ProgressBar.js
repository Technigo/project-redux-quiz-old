import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3f55a5;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: .8rem;

  & progress-wrapper {
    display: flex;
  flex-direction: column;
  align-items: center;
  color: #3f55a5;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: .8rem;
  }

  & progress {
    box-shadow: inset 0px 10px 3px -4px rgba(255, 255, 255, 0.2);
transition: all 1s ease;
border-radius: 100px;
background: var(--bar);
height: 40px;
position: relative;
  }

  & chart {
justify-content: flex-start;
background: var(--char);
box-shadow: inset 0px 5px 20px -2px #7e3c17;
position: relative;
padding: 0 5px;
margin-left: 2em;
display: flex;
height: 40px;
width: 500px;
border-radius: 100px;
}

  & bar {
box-shadow: inset 0px 10px 3px -4px rgba(255, 255, 255, 0.2);
transition: all 1s ease;
border-radius: 100px;
background: var(--bar);
height: 40px;
position: relative;
}

`

export const ProgressBar = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  return (
    <ProgressContainer>
      <progress
        id="progress"
        value={question.id}
        max="11" />
      <label htmlFor="progress">{question.id} / 10
      </label>
    </ProgressContainer>
  )
}