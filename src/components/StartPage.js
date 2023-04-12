/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'


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
border: solid 8px #BDE0FE;
height: 200px;
width: 200px;
position: absolute;
`

const StartButton = styled.button`
padding: 10px;
color: white;
background-color: black;
border-radius: 10px;
margin-top: 5px;
font-size: 12px;
font-weight: 500;
width: 100px;
`
export const OuterWrapperStartPage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  border: 1px solid red;
`

export const InnerWrapperStartPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: transparent;
width: 60%;
height: 100vh;
align-items: center;
margin: 0 auto;`