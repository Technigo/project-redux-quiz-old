import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { quiz } from '../reducers/quiz';
import OptionButton from './OptionButton';

const QuestionText = styled.h1`
  color: #564593;
  font-size: 30px;
  margin-bottom: 40px;
`

export const CurrentQuestion = () => {
  // this variable takes the first question (index 0) from the questions array from our
  // "initialState"-object in our store and displays it as a starting point of the quiz
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  console.log(quiz)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <div>
        <QuestionText>{question.id}. {question.questionText}</QuestionText>
        {question.options.map((option, index) => {
          return (
            <OptionButton
              key={option}
              index={index}
              option={option} />
          )
        })}
      </div>
    </div>
  )
}
