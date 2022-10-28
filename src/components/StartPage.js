/* eslint-disable */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion';
import { OuterWrapperStartpage } from 'components/OuterWrapperStartpage';
import styled from 'styled-components/macro';

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
border-color:  #A27DA7;
border-radius: 50%;
height: 250px;
width: 250px;
background-color: #A27DA7;
position: absolute;
  
h2 {
  font-size: 10px;
  margin-top: 20px;
  color: white;
  position: absolute;
  font-size: 20px;
  margin-bottom: 0px;
  top: 1px;
}

h1 {
  font-size: 30px;
  color: white;
  position: relative;
  margin: 5px;
  top: 60px;
  padding: 5px 15px 5px 15px;
}

  @media (min-width: 668px) and (max-width: 1052px) {
    height: 450px;
    width: 450px;

    h2 {
      font-size: 50px;
      top: 30px;
    }
    
    h1 {
      font-size: 65px;
      top: 120px;
      line-height: 50px;
      padding: 5px 55px 5px 55px;
    }
  }

  @media (min-width: 1053px) {

  }
`

const StartButton = styled.button`
  padding: 7px;
  color: #4F4350;
  border-radius: 15px;
  font-size: 18px;
  border: none;
  width: 150px;
  background-color:#D9B2DE;
  position: relative;
  top: 70px;

  &:hover {
  background-color:  #533258; 
  color: white;
  }

  @media (min-width: 668px) and (max-width: 1024px) {
  position: relative;
  top: 150px;
  padding: 14px;
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