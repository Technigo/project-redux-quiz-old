/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import { Container, QuestionWrapper } from 'Globalstyles'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Summary = () => {
  const dispatch = useDispatch()

  const answerSummary = useSelector((store) => store.quiz.answers)
  console.log('our answers:', answerSummary)

  return (
    <Container>
      <h1>Summary </h1>
      {answerSummary.map((item) => {
        return (
          <QuestionWrapper>
            <p key={item.questionId}>{item.answer}</p>
            <p key={item.questionId}>{item.isCorrect.toString()}</p>
          </QuestionWrapper>
        )
      })}

      <button id="restartBtn" type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
    </Container>
  )
}

