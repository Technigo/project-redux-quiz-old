/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import { Container, QuestionWrapper } from 'Globalstyles'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CorrectAnswer } from './CorrectAnswer'

export const Summary = ({ score }) => {
  const dispatch = useDispatch()

  const answerSummary = useSelector((store) => store.quiz.answers)
  console.log('our answers:', answerSummary)
  console.log('score summary', score)

  // const correctAnswer = useSelector((store) => store.quiz.questions.correctAnswerIndex)
  // console.log('correct answer', correctAnswer)
  return (
    <Container>
      <h1>Summary </h1>
      <QuestionWrapper>
        {answerSummary.map((item) => {
          return (
            <div key={item.questionId}>
              <p>{item.answer}</p>
              <p>{item.isCorrect.toString()}</p>
              <CorrectAnswer />
              {/* <p key={item.questionId}>Correct answer:{item.question.options[correctAnswer]}</p> */}
            </div>
          )
        })}
      </QuestionWrapper>

      <p>Your score is: {score}</p>
      {/* showing if you win or loose */}
      {score >= 4 && ('You are FRIEND`s Nerd Congratulation')}
      {score < 4 && ('You lost, watch all seasons again')}
      <button id="restartBtn" type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
    </Container>
  )
}

