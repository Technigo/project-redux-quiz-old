/* eslint-disable */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion';
import { OuterWrapperStartpage } from 'components/OuterWrapperStartpage';
import styled from 'styled-components/macro';
// import question from '../images/question.png';

export const StartPage = () => {
  //const question = useSelector((state) => state.quizStart())
  const question = useSelector((state) => state.quiz)
  const dispatch = useDispatch();

  return (
    <>

      {!question.quizStart ? (
        <OuterWrapperStartpage>
            <InnerWrapperStartpage>
            <Start>
              <h2>6 questions</h2>
              <h1>about random stuff</h1>
              {/* <Img src={question} alt="question-img"/> */}
              <StartButton onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Lets get started!</StartButton>
            </Start>
            </InnerWrapperStartpage>
            </OuterWrapperStartpage>
        ) : (
          <CurrentQuestion />
      )}
 
    </>
  )
}
const Start = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border: solid;
border-color: #F6CEFB;
border-radius: 50%;
height: 480px;
width: 480px;
background-color: #F6CEFB;
  
h2 {
  font-size: 40px;
  margin-top: 40px;
}
h1 {
  font-size: 70px;
}
`

// const Img = styled.img`
// `


const StartButton = styled.button`
  padding: 15px;
  color: #4F4350;
  border-radius: 15px;
  font-size: 18px;
  border: none;
  margin: 10px;
  width: 150px;
  background-color:#D9B2DE;

  &:hover {
  background-color:  #C371D2; 
  color: black;
  }
`

export const InnerWrapperStartpage = styled.div`
  background-color: transparent;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
`