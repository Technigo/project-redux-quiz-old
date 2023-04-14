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
              <StartH1>Front End Dev Quiz</StartH1>
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
border: solid 1px #3d85c6;
border-radius: 20px;
height: 500px;
width: 500px;
position: absolute;
box-shadow: 35px -12px #3d85c6;
`

const StartH1 = styled.text`
margin-top: 20%;
align-items: center;
padding: 12px 30px;
font-weight: 1000;
font-size: 70px;
color: #3d85c6;
text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`


const StartButton = styled.button`
  padding: 10px;
  color: black;
  border-radius: 10px;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  border: solid 1px black; 
  width: 133px;
  background-color: #3d85c6;
  position: absolute;
  bottom: 150px;
  margin-left: 180px;
  text-transform: uppercase;

  &:hover {
    background-color: black;
    color: #3d85c6;
    cursor: pointer;
    border-color: #3d85c6;
    transform: scale(1.2);
  }
`
const OuterWrapperStartPage = styled.div`
background-size: cover;
background: #3d85c6;
width: 100vw;
height: 100vh;
background-image: url('${purple}');
background-size: cover;
`

const InnerWrapperStartPage = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    width: 70%;
    height: 100%;
    align-items: center;
    margin: 0px auto;`
