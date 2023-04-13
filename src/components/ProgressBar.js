import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  p {
    color: #326886;a
    font-weight: 600;
  }
`

const Progress = styled.div`
  background-color: #b58526;
  padding: 3px 6px;
  -webkit-appearence: none;
  border-radius: 10px;
`

export const ProgressBar = () => {
  const quizSlice = useSelector((state) => state)
  const { questions } = quizSlice.quiz
  const { answers } = quizSlice.quiz
  const amountOfQuestions = useSelector((state) => state.quiz.questions.length);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  return (
    <ProgressBarWrapper>
      <Progress>
        <progress value={answers.length} max={questions.length} />
      </Progress>
      <p>{question.id} / {amountOfQuestions}</p>
    </ProgressBarWrapper>
  )
}