import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { useHistory } from 'react-router-dom'

import { StyledButton } from 'components/StyledButton'
import styled from 'styled-components'
import Chart from '../components/Chart'
// import Progressbar from 'components/Progressbar'

export const SummaryBackground = styled.div`
  position: absolute;
  text-align: center;
  margin: 0;
  width: 100%;
  /* opacity: 0.85; */
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
  @media (min-width: 531px) {
    height: 100%;
  }
`
const SummaryContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
`

const SummaryText = styled.div`
  width: 50%;
  height: 250px;
  overflow-y: scroll;
  font-weight: bold;
`

const SummaryTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const SummaryTitle = styled.h1`
  margin-top: 4em;
`
const SummaryParagraphs = styled.p`
  font-size: 15px;
  font-style: italic;
  margin: 0;
`

const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5em;
`

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const points = useSelector((state) => state.quiz.points)

  const dispatch = useDispatch()

  const history = useHistory()

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    history.push('/')
  }
  const correctAnswers = answers.filter((answer) => answer.isCorrect)
  const numberOfCorrectAnswers = correctAnswers.length

  const numberOfQuestions = answers.length

  const categories = [
    ...new Set(answers.map((answer) => answer.question.category)),
  ]

  const summary = categories.map((category) => {
    const questionsInCategory = answers.filter(
      (answer) => answer.question.category === category
    )
    const noOfQus = questionsInCategory.length
    const correctQus = questionsInCategory.filter(
      (answer) => answer.isCorrect
    ).length

    return { category, noOfQus, correctQus }
  })

  return (
    <SummaryBackground>
      <SummaryTitle>
        {' '}
        Great work, you managed to answer all the questions in our quiz!{' '}
      </SummaryTitle>
      <SummaryContainer>
        <SummaryText>
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
                <SummaryParagraphs>
                  Your answer was {usersAnswer}
                </SummaryParagraphs>
                <SummaryParagraphs>
                  The correct answer is:
                  {correctAnswer}
                </SummaryParagraphs>
              </div>
            )
          })}
        </SummaryText>
        <SummaryTotal>
          <p>
            You got {numberOfCorrectAnswers} / {numberOfQuestions} total correct
            answers
          </p>
          <p>You got {points} out of 65 points</p>

          <StyledButton onClick={handleRestart}>Try again</StyledButton>
        </SummaryTotal>
      </SummaryContainer>
      <ChartWrapper>
        {summary.map((item) => (
          <Chart key={item.category} data={item} />
        ))}
      </ChartWrapper>
    </SummaryBackground>
  )
}

export default Summary
