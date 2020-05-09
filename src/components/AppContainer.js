import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { CurrentQuestion } from './CurrentQuestion'
import { QuizStart } from './QuizStart'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1108px;
  height: 500px;
  background: white;
  border: solid 2px black;

  @media (max-width: 500px) {
    width: 100vw;
  }
`

export const AppContainer = () => {
  const begin = useSelector((state) => state.quiz.quizStart)
  console.log(begin)

  return (
    <>
      <Container>
        {begin ? <CurrentQuestion /> : <QuizStart />}
      </Container>
    </>
  )
}
