import React from 'react'
import styled from 'styled-components'

const ProgressBarContainer = styled.div`
  height: 30px;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  margin: 1em auto;
  align-self: center;
`
const CurrentProgress = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0;
  background-image: -webkit-linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
  background-image: linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.progress}%;
`
const Progress = styled.span`
  margin: 3px;
  color: white;
`

const Progressbar = ({ numberOfQuestions, question }) => {
  const progress = ((question.id - 1) / numberOfQuestions) * 100

  return (
    <section className='main-container'>
      <ProgressBarContainer>
        <CurrentProgress progress={progress}>
          <Progress>{Math.round(progress)}%</Progress>
        </CurrentProgress>
      </ProgressBarContainer>
    </section>
  )
}

export default Progressbar
