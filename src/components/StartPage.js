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
    <ContentSection>
      {!question.quizStart ? (
            <Start>
              <p>hej hej</p>
              <h1>Start quiz here!</h1>
              <button onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Start Quiz</button>
            </Start>
        ) : (
          <CurrentQuestion />
      )}
      </ContentSection>
    </>
  )
}
const Start = styled.div`
margin: 50% 20% 0 20%;
border: solid red 2px;
`