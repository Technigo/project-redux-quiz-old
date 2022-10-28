/* eslint-disable */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextButton } from 'components/NextButton'
import { ReturnButton } from 'components/ReturnButton'
import Summary from 'components/Summary'
import styled from 'styled-components/macro';
import ProgressBar from 'components/Progressbar';


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const store = useSelector((state) => state.quiz)
  const result = useSelector((state) => state.quiz.questions.length)
  // const id = useSelector(state => state.quiz.questions[state.quiz.currentQuestion].id)

  console.log('store', store)
  console.log('result', result) //funkar

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

  const bgcolor = '#6a1b9a'
  let completed =Math.round((question.id/result) *100)

  return (
  <>
    {!store.quizOver ? (
       <OuterWrapperQuestion>
        <InnerWrapperQuestion>
        <QuestionWrapper>        
        <ProgressBar bgcolor={bgcolor} completed={completed} />
        <Text>{question.questionText}</Text>
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
      <div className="nav-button-wrapper">
      <ReturnButton /> <NextButton />
      </div>
    
      </AnswerWrapper>
      </InnerWrapperQuestion>
      </OuterWrapperQuestion>
  ) : ( 
    <>
    <Summary />
    </>
    )}
  </>
)
} 

const OuterWrapperQuestion = styled.main`
background: transparent;
padding-top: 15px;
width: 100%;

@media (min-width: 667px){
  padding-top: 0;
}

@media (min-width: 1025px){
  padding-top: 0;
}
`

const InnerWrapperQuestion = styled.div`
background-color: #FFE4FF;
width: 80%;
margin: 0 auto;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 1025px){
  height: 100vh;
}
`

const QuestionWrapper = styled.div `
width: 100%;
height: 45vh;
background-color: #A27DA7;
margin: 0px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
border-bottom: solid 2px #C371D2;

@media (max-width: 667px) {
  height: 30vh;
}
`

// const Counter = styled.p`
// border-radius: 50%;
// background-color: #FFE7FF;
// width: 50px;
// height: 50px;
// display: flex;
// align-items: center;
// justify-content: center;
// `
const Text = styled.h1`
color: whitesmoke;
width: 100%;
font-size: 18px;

@media (min-width: 1025px) {
  height: auto;
  font-size: 32px;}
`

const AnswerWrapper = styled.div `
  width: 80%;
  height: 60vh;
  background-color: #FFE4FF;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 25px;
  box-sizing: border-box;
  .nav-button-wrapper{
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  @media (max-width: 667px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  .nav-button-wrapper{
    display: flex;
    flex-direction: column-reverse;
    width: 200px;
    }
  }
`
const QuestionButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  width: auto;
  box-sizing: border-box;
  
  @media (min-width: 667px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: auto;
    box-sizing: border-box;
  }

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 700px;
    box-sizing: border-box;
    padding-bottom: 20px;
  }

  .disabled-true {
    font-size: 13px;
    border: none;
    border-radius: 10px;
    width: 160px;
    height: 100%;
    background-color: #D9B2DE;
    color: whitesmoke;
    padding: 13px;
    margin: 0px;

    @media (min-width: 1025px) {
      width: 100%;
      font-size: 18px;
      padding: 31px;
    }
    }

  .disabled-false {
    font-size: 13px;
    font-weight: 600;
    border: solid 1px #A152B1;
    border-radius: 10px;
    width: 160px;
    height: 100%;
    background-color: #C371D2;
    color: whitesmoke;
    padding: 13px;
    margin: 0px;
    cursor: pointer;
    &:hover {
      background-color:  #A152B1; 
      color: whitesmoke;
    }
    @media (min-width: 1025px) {
      width: 100%;
      font-size: 18px;
      padding: 31px;
      
    }
  }

`


