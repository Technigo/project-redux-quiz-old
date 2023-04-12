/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  // This is where the MAGIC happens
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => a.questionId === question.id)
  )

  const dispatch = useDispatch()
  const [hasAnswered, setHasAnswered] = useState(false)
  const [userAnswerIndex, setUserAnswerIndex] = useState('')

  // This resets the answer for every question

  useEffect(() => {
    setHasAnswered(false)
    setUserAnswerIndex('')
  }, [question])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    if (!answer) {
      setHasAnswered(true)
      setUserAnswerIndex(answerIndex)
      dispatch(quiz.actions.submitAnswer(
        { questionId, answerIndex }
      ))
    }
  }

  const guessCheck = (index) => {
    if (!hasAnswered) {
      return 'default'
    }
    if (index === question.correctAnswerIndex) {
      return 'correct'
    } else if (index === userAnswerIndex) {
      return 'wrong'
    } else {
      return 'default-disabled'
    }
  }

  return (
    <Main>
      <Board>
        <StyledImg src={question.img} />
        <Headline>Question: {question.questionText}</Headline>
        <ButtonContainer>
          {question.options.map((option, index) => {
            return (
              <AnswerBtn
                correct={hasAnswered
                && (index === question.correctAnswerIndex || index === userAnswerIndex)}
                wrong={hasAnswered
                && (index !== question.correctAnswerIndex && index === userAnswerIndex)}
                options
                onClick={() => {
                  guessCheck()
                  onAnswerSubmit(question.id, index)
                }}
                key={option}
                type="button">
                {option}
              </AnswerBtn>
            )
          })}
        </ButtonContainer>
      </Board>
    </Main>
  )
}

const Main = styled.div`
display:flex; 
flex-direction:column;
background-color: #0078BE;
`
const Board = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
border: 2px solid red; 
margin: 20px; 
`

const StyledImg = styled.img`
width: 313px;
height: 286px;
object-fit: cover;
border-radius: 10px;

@media (min-width: 834px) and (max-width: 1024px) {
width: 691px;
height: 356px;
}
`

const ButtonContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 320px;
gap: 1rem;
justify-content: space-around;
`

const AnswerBtn = styled.button`
width: 136px;
height: 114px;
border: none;
border-radius:10px;
background-color: #FFFFFF;

${({ correct }) => correct && `
background-color: green;
border: solid 2px white;
`}

${({ wrong }) => wrong && `
background-color: red;
border: solid 2px white;
`}

`
const Headline = styled.h1`
font-size: 2rem;
text-align: center;
color: white;
font-family: 'Just another hand';
font-weight:400;
`