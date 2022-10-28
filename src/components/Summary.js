/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import { Container, StartButton, SummaryWrapper, SummaryContainer } from 'Globalstyles'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Summary = ({ score }) => {
  const dispatch = useDispatch()

  const answerSummary = useSelector((store) => store.quiz.answers)
  // console.log('our answers:', answerSummary)
  // console.log('score summary', score)

  return (
    <Container>
      <h1>Summary </h1>
      {/* showing if you win or loose */}
      <p><span>&#9733;</span>Your score: <span id="score">{score}/5</span><span>&#9733;</span></p>
      {score >= 4 && ('You are FRIEND`s Nerd. Congratulations')}
      {score < 4 && ('You lost, watch all seasons again')}
      <SummaryContainer>
        {answerSummary.map((item) => {
          return (
            <SummaryWrapper key={item.questionId}>
              <p>Your Answer: {item.answer}</p>
              <p>Correct Answer: {item.question.stringAnswer}</p>
            </SummaryWrapper>
          )
        })}
      </SummaryContainer>
      <StartButton id="restartBtn" type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</StartButton>
    </Container>
  )
}