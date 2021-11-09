import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
// import Summary from './Summary';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NextStepButton from './NextStepButton'

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 40px 0px;
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
          <button
            disabled={usersAnswer}
            key={option.id}
            onClick={() => onAnswerSubmit(question.id, index)}
          >
            {option.answer}
          </button>
        ))}
      </QuestionWrapper>
      {usersAnswer?.isCorrect && <p>Correct!</p>}
      {usersAnswer?.isCorrect === false && <p>Incorrect!</p>}
      <NextStepButton />
    </section>
  )
}
