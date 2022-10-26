/* eslint-disable */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion';

export const StartPage = () => {
  //const question = useSelector((state) => state.quizStart())
  const question = useSelector((state) => state.quiz)
  const dispatch = useDispatch();

  return (
    <>
      {!question.quizStart ? (
            <div>
              <p>hej hej</p>
              <h1>Start quiz here!</h1>
              <button onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Start Quiz</button>
            </div>
        ) : (
          <CurrentQuestion />
      )}
    </>
  )
}


