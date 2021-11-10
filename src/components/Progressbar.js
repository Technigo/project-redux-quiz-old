import React from 'react'
import styled from 'styled-components'


const Progressbar = ({ numberOfQuestions, question }) => {
  const progress = ((question.id - 1) / numberOfQuestions) * 100

  //We put the styled components inside the Progressbar component so that we were able to style the width
  //with the help of our progress variable
  const ProgressBarContainer = styled.div`
    height: 20px;
    width: 200px;
    background-color: silver;
    border-radius: 10px;
    margin: 1em auto;
    align-self: end;
  `
  const CurrentProgress = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 0;
    background-color: #03a700;
    height: 100%;
    border-radius: 10px;
    width: ${progress}%;
  `
  const Progress = styled.span`
    margin: 3px;
  `

  return (
    <section className='main-container'>
      <ProgressBarContainer>
        <CurrentProgress>
          <Progress>{Math.round(progress)}%</Progress>
        </CurrentProgress>
      </ProgressBarContainer>
    </section>
  )
}

export default Progressbar
