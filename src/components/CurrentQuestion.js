/* eslint-disable import/no-duplicates */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextQuestionBtn } from './Buttons'
// eslint-disable-next-line import/no-duplicates
import ButtonContainer from './Buttons'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch();
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const onButtonClick = ({ answerIndex }) => {
    dispatch(quiz.actions.goToNextQuestion())
    dispatch(quiz.actions.submitAnswer({ answerIndex }))
  }

  // Do we need this one?
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((singleOption, answerIndex) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        <label htmlFor="current-question" key={singleOption}>
          <input
            id="current-question"
            type="radio"
            value={singleOption}
            // onChange={(event) => set???(event.target.value)} need to set with real values
            // checked={singleOption}
            index={answerIndex}
            aria-label={singleOption} />
          {singleOption}
        </label>)}

      {/* <Button submit>Submit</Button>
        <Button>Submit</Button> */}
      <NextQuestionBtn
        onClick={onButtonClick}
        type="button">Next Question
      </NextQuestionBtn>

    </div>
  )
}