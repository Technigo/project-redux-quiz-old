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
              <h1>Start quiz here!</h1>
              <button onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Start Quiz</button>
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
border: solid green 2px;`

export const InnerWrapperStartpage = styled.div`
  background-color: pink;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
`