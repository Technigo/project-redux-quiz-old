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
      <Question>
      <ReturnButton />
      <p>{question.id} / 5</p>
      <h1>Question: {question.questionText}</h1>
      </Question>

      <Answer>
      <div className="question-button-container">
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
      </div>
      <NextButton />
      </Answer>
    </div>
  ) : ( 
    <>
    <Summary />
    </>
    )}
  </>
)
} 


const Question = styled.div `
border: solid red 2px;
width: 100%;
background-color: pink;
`
const Answer = styled.div `
border: solid red 2px;
width: 100%;
background-color: black;
`