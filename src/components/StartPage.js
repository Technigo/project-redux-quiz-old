/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import purple from '../assets/purple.jpg'


export const StartPage = () => {
  const question = useSelector((state) => state.quiz)
  const dispatch = useDispatch();

  return (
    <>
      {!question.quizStart ? (
        <OuterWrapperStartPage>
          <InnerWrapperStartPage>
            <Start>
              <h1>FRONT END</h1>
              <StartButton onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Lets get started!</StartButton>
            </Start>
          </InnerWrapperStartPage>
      </OuterWrapperStartPage>
      ) : (
        <CurrentQuestion />
      )}

    </>

  )
}


const Start = styled.div`
display: flex;
flex-direction: column;
text-align: center;
border: solid 6px #0dc9e6;
height: 500px;
width: 500px;
position: absolute;
background-image: url('${purple}');
background-size: cover;
`



const StartButton = styled.button`
  padding: 10px;
  color: white;
  border-radius: 10px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  border: solid 1px #0dc9e6;
  width: 133px;
  background-color:#0dc9e6;
  position: absolute;
  bottom: 150px;
  margin-left: 180px;
  text-transform: uppercase;

  &:hover {
    background-color: black;
    color: white;
  }
`
const OuterWrapperStartPage = styled.div`
background-size: cover;
background: #231f20;
  position: absolute;
  /* display: flex;
  flex-direction: column; */
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  background-image: url('${purple}');
  background-size: cover;
`

 const InnerWrapperStartPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: transparent;
width: 80%;
height: 100vh;
align-items: center;
margin: 0 auto;`
