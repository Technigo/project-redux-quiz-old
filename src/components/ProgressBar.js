import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  p {
    color: #326886;
    font-weight: 600;
  }
`

const Progress = styled.div`
  background-color: #b58526;
  padding: 3px 6px;
  -webkit-appearence: none;
  border-radius: 10px;

  progress {
    color: green;
  }
`

export const ProgressBar = () => {
  const quizSlice = useSelector((state) => state)
  const questions = quizSlice.quiz.questions
  const answers = quizSlice.quiz.answers

  return (
    <ProgressBarWrapper>
      <Progress>
        <progress value={answers.length} max={questions.length} />
      </Progress>
      <p>{(answers.length / questions.length) * 100}%</p>
    </ProgressBarWrapper>
  )
}
