/* eslint-disable */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion';
import { ContentSection } from 'components/ContentSection';
import styled from 'styled-components/macro';

export const StartPage = () => {
  //const question = useSelector((state) => state.quizStart())
  const question = useSelector((state) => state.quiz)
  const dispatch = useDispatch();

  return (
    <>

      {!question.quizStart ? (
        <ContentSection>
            <InnerQr>
            <Start>
              <h1>Start quiz here!</h1>
              <button onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Start Quiz</button>
            </Start>
            </InnerQr>
            </ContentSection>
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


const InnerQr = styled.div`
  background-color: pink;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
`