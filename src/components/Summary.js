/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import { Container, QuestionWrapper } from 'Globalstyles'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

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
      {answerSummary.map((item) => {
        return (
          <QuestionWrapper>
            <p key={item.questionId}>{item.answer}</p>
            <p key={item.questionId}>{item.isCorrect.toString()}</p>
            <p key={item.questionId}>Correct answer: {item.question.correctAnswerIndex}</p>
            {/* <p key={item.questionId}>Correct answer:{item.question.options[correctAnswer]}</p> */}
          </QuestionWrapper>
        )
      })}
      <p>Your score is: {score}</p>
      {/* showing if you win or loose */}
      {score >= 4 && ('you are FRIEND`s Nerd Congratulation')}
      {score < 4 && ('you lost, watch all seasons again')}
      <button id="restartBtn" type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
    </Container>
  )
}

