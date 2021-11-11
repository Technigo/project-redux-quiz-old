import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { useHistory } from 'react-router-dom'

import { StyledButton } from 'components/StyledButton'
import styled from 'styled-components'
import Header from 'components/Header';

const SummaryBackground = styled.div`
  position: absolute;
  margin: 0;
  width: 100%;
  height: auto;
  opacity: 0.85;
  background: #e65c00; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f9d423,
    #e65c00
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f9d423,
    #e65c00
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  console.log(answers)
  const dispatch = useDispatch()

  const history = useHistory()

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    history.push('/')
  }
  const correctAnswers = answers.filter((answers) => answers.isCorrect)
  const numberOfCorrectAnswers = correctAnswers.length

  const numberOfQuestions = answers.length

  return (
    <>
    <Header />
    <SummaryBackground>
      <section className='main-container'>
        <h1>
          {' '}
          Great work you managed to answer all the questions in our quiz!{' '}
        </h1>
        {answers.map((item) => {
          const questionNumber = item.question.id
          const questionText = item.question.questionText
          const usersAnswer = item.question.options[item.answerIndex].answer
          const correctAnswer =
            item.question.options[item.question.correctAnswerIndex].answer

          return (
            <div key={questionNumber}>
              <p>
                {questionNumber}. {questionText}
              </p>
              <p>Your answer was {usersAnswer}</p>
              <p>
                The correct answer is:
                {correctAnswer}
              </p>
            </div>
          )
        })}
        <p>
          You got {numberOfCorrectAnswers} / {numberOfQuestions} correct answers
        </p>

        <StyledButton onClick={handleRestart}>Try again</StyledButton>
      </section>
    </SummaryBackground>
    </>
  )
}

export default Summary
