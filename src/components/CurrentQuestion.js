import React from 'react'
import { quiz } from '../reducers/quiz'
import styled from 'styled-components'

import AnswerButton from './AnswerButton'

const AnswerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row;
  padding: 10px 0px 40px 0px;
`

export const CurrentQuestion = ({ question, usersAnswer }) => {
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <section className='main-container'>
      <h1 className='category-label'> Category: {question.category}</h1>
      <h2>
        Question {question.id}: {question.questionText}
      </h2>

      <AnswerWrapper>
        {question.options.map((option, index) => (
          <AnswerButton
            question={question}
            option={option}
            index={index}
            usersAnswer={usersAnswer}
          />
        ))}
      </AnswerWrapper>
      {usersAnswer?.isCorrect && <p>Correct!</p>}
      {usersAnswer?.isCorrect === false && <p>Incorrect!</p>}
    </section>
  )
}
