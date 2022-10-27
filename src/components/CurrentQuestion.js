/* eslint-disable */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextButton } from 'components/NextButton'
import { ReturnButton } from 'components/ReturnButton'
import Summary from 'components/Summary'
import styled from 'styled-components/macro';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const store = useSelector((state) => state.quiz)

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const answer = useSelector((state) => 
  state.quiz.answers.find((a) => ( a.questionId === question.id)
  ));

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
 
    if (question.correctAnswerIndex === answerIndex) {
        document.getElementById(`${answerIndex}`).style.background = 'green'

    } else {
      document.getElementById(`${answerIndex}`).style.background = 'red'
    }
  }
  
//  if( store.quizOver === true) {
//   return (
//     <Summary/>)
//   } else {

  return (
  <>
    {!store.quizOver ? (
      <div>
      <InnerWrapperQuestion>
      <QuestionWrapper>
      <Counter>{question.id} / 5</Counter>
      <Text>Question: {question.questionText}</Text>
      </QuestionWrapper>

      <AnswerWrapper>
      <QuestionButtonContainer>
        {question.options.map((option, index) => {
          return (
          <button 
          className={answer ? 'disabled-true' : 'disabled-false'} 
          id={index}
          onClick={() => onAnswerSubmit(question.id, index)} 
          key={option} 
          type="button" 
          disabled={answer}
          >
          {option}</button>
          )
        })}
    </QuestionButtonContainer>
      <NextButton /><ReturnButton />
      </AnswerWrapper>
      </InnerWrapperQuestion>
    </div>
  ) : ( 
    <>
    <Summary />
    </>
    )}
  </>
)
} 


const QuestionWrapper = styled.div `
width: 100%;
height: 40vh;
background-color: yellow;
display: grid;
justify-content: center;
border: solid pink 2px;
`

const Counter = styled.p`
border: solid black 2px;
`
const Text = styled.h1`
border: solid green 2px;
border: solid blue 2px;
`

const AnswerWrapper = styled.div `
width: 100%;
height: 60vh;
background-color: black;
justify-content: center;
border: solid 2px red;
`
const QuestionButtonContainer = styled.div`
border: solid red 2px;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
border: solid 2px blue;
`

const InnerWrapperQuestion = styled.div`
  background-color: pink;
  width: 80%;
  // height: 100vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 2px blue;



`



