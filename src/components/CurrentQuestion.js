import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import styled from 'styled-components'
import NextStepButton from './NextStepButton'

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 40px 0px;
`
const QuestionButton = styled.button`
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
`

export const CurrentQuestion = ({ numberOfQuestions, question }) => {
  // const question = useSelector(
  //   (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  // );
  const usersAnswer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )

  const currentQuestionNumber = useSelector(
    (state) => state.quiz.currentQuestionIndex
  )

  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  const onNextQuestionSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <section className='main-container'>
      <h1>Question: {question.questionText}</h1>
      <QuestionWrapper>
        {question.options.map((option, index) => (
          <QuestionButton
            disabled={usersAnswer}
            key={option.id}
            onClick={() => onAnswerSubmit(question.id, index)}
          >
            {option.answer}
          </QuestionButton>
        ))}
      </QuestionWrapper>
      {usersAnswer?.isCorrect && <p>Correct!</p>}
      {usersAnswer?.isCorrect === false && <p>Incorrect!</p>}
      <NextStepButton />
    </section>
  )
}
