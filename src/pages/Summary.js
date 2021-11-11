import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { useHistory } from 'react-router-dom'

import { StyledButton } from 'components/StyledButton'
import styled from 'styled-components'

export const SummaryBackground = styled.div`
  position: absolute;
  text-align: center;
  margin: 0;
  width: 100%;
  height: 100%;
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
`
const SummaryContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
`

const SummaryText = styled.div`
  width: 50%;
  height: 250px;
  overflow-y: scroll;
`

const SummaryTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const SummaryTitle = styled.h1`
  margin-top: 4em;
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
  const correctAnswers = answers.filter((answer) => answer.isCorrect)
  const numberOfCorrectAnswers = correctAnswers.length

  const numberOfQuestions = answers.length

  const noOfSportQus = answers.filter((answer) => answer.question.category === "Sport").length
  const correctSportQus = answers.filter((answer) => answer.question.category === "Sport" && answer.isCorrect).length
  const noOfEntQus = answers.filter((answer) => answer.question.category === "Entertainment").length
  const correctEntQus = answers.filter((answer) => answer.question.category === "Entertainment" && answer.isCorrect).length
  const noOfFoodQus = answers.filter((answer) => answer.question.category === "Food").length
  const correctFoodQus = answers.filter((answer) => answer.question.category === "Food" && answer.isCorrect).length
  const noOfGeneralQus = answers.filter((answer) => answer.question.category === "General").length
  const correctGeneralQus = answers.filter((answer) => answer.question.category === "General" && answer.isCorrect).length
  const noOfGeoQus = answers.filter((answer) => answer.question.category === "Geography").length
  const correctGeoQus = answers.filter((answer) => answer.question.category === "Geography" && answer.isCorrect).length
  const noOfInoQus = answers.filter((answer) => answer.question.category === "Innovation").length
  const correctInoQus = answers.filter((answer) => answer.question.category === "Innovation" && answer.isCorrect).length
  
  return (
    <SummaryBackground>
      <SummaryTitle>
        {' '}
        Great work you managed to answer all the questions in our quiz!{' '}
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
                <p>Your answer was {usersAnswer}</p>
                <p>
                  The correct answer is:
                  {correctAnswer}
                </p>
              </div>
            )
          })}
        </SummaryText>
        <SummaryTotal>
          <p>
            You got {numberOfCorrectAnswers} / {numberOfQuestions} total correct
            answers
          </p>
          {/* <p>
            You got {correctSportQus} / {noOfSportQus} correct sport
            answers
          </p>
          <p>
            You got {correctEntQus} / {noOfEntQus} correct entertainment
            answers
          </p>
          <p>
            You got {correctFoodQus} / {noOfFoodQus} correct food
            answers
          </p>
          <p>
            You got {correctGeneralQus} / {noOfGeneralQus} correct general knowledge
            answers
          </p>
          <p>
            You got {correctGeoQus} / {noOfGeoQus} correct geography
            answers
          </p>
          <p>
            You got {correctInoQus} / {noOfInoQus} correct innovation
            answers
          </p> */}

          <StyledButton onClick={handleRestart}>Try again</StyledButton>
        </SummaryTotal>
      </SummaryContainer>
    </SummaryBackground>
  )
}

export default Summary
