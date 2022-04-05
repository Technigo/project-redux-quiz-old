import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RestartButton } from './Buttons'

// ----- STYLED COMPONENTS -----
const SummaryH1 = styled.h1`
  /* code here */
`

const SummaryH2 = styled.h2`
  /* code here */
`

const AllAnswersContainer = styled.div`
  /* code here */
`

const AnswerContainer = styled.div`
  /* code here */

  & h3 {
  /* code here */
  }

  & p {
  /* code here */
  }
`

const NoAnswerContainer = styled.div`
  /* code here */
`

// ----- STYLED COMPONENTS -----


export const Summary = () => {

  const answers = useSelector((state) => state.quiz.answers)

  const correctAnswers = answers.filter(item => item.isCorrect)
  const scorePercent = correctAnswers.length * 100 / answers.length

  const grade = () => {
    return scorePercent > 90 ? "Wow, you were fantastic, you got an A!"
      : scorePercent > 80 ? "You did great and and can be proud of getting a B!"
        : scorePercent > 70 ? "You did very well and deserve a C!"
          : scorePercent > 60 ? "You got some good answers and deserve a D!"
            : scorePercent > 50 ? "It could have been better, but at least you didn't fail: an E for you!"
              : "Your grade is F as in FAIL"
  }

  console.log(answers)

  return (
    <>
      <SummaryH1>Summary</SummaryH1>
      <SummaryH2>{grade()}</SummaryH2>
      <AllAnswersContainer>
        {answers.map((item) => (
          <AnswerContainer key={item.answer}>
            <h3>Question {item.questionId} "{item.question.questionText}"</h3>
            <p>
              You answered "{item.answer}"
              {item.isCorrect ? ` and you were right, the answer was indeed ${item.answer}!` : `, but you got it wrong, the answer wasn't ${item.answer}, it was ${item.question.options[item.question.correctAnswerIndex]}`}
            </p>
          </AnswerContainer>
        ))}
      </AllAnswersContainer>
      {answers.length === 0 && (
        <NoAnswerContainer>You haven't answered any question!</NoAnswerContainer>
      )}
      <SummaryH2>Score: {correctAnswers.length}/{answers.length}</SummaryH2>
      <RestartButton />
    </>
  )
}
