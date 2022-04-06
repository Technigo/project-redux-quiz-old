import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Option } from './Option'
import { NextButton, SubmitButton } from './Buttons'

const QuestionH1 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  height: 120px;
  margin: 2rem 1.5rem;
`

const OptionsContainer = styled.div`
  padding-top: 2rem;
  width: 375px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 1.5rem;
`

const ScoreH2 = styled.h2`
  font-size: 1rem;
`

const Image = styled.img`
height: 240px;
`

export const CurrentQuestion = () => {

  const questions = useSelector((state) => state.quiz.questions)
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
  const [isOptionDisabled, setIsOptionDisabled] = useState(false)
  const [isNextDisabled, setIsNextDisabled] = useState(true)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <QuestionH1>{question.questionText}</QuestionH1>
      <Image src={question.img} alt="" />
      <OptionsContainer>
        {question.options.map((option, answerIndex) => (
          <Option
            key={answerIndex}
            option={option}
            answerIndex={answerIndex}
            setIsNextDisabled={setIsNextDisabled}
            isOptionDisabled={isOptionDisabled}
            setIsOptionDisabled={setIsOptionDisabled}
            isCorrectAnswer={isCorrectAnswer}
            setIsCorrectAnswer={setIsCorrectAnswer} />
        ))}
      </OptionsContainer>
      {!quizOver && questionIndex === questions.length - 1 ? <SubmitButton isNextDisabled={isNextDisabled} setIsNextDisabled={setIsNextDisabled} /> : <NextButton isNextDisabled={isNextDisabled} setIsNextDisabled={setIsNextDisabled} isOptionDisabled={isOptionDisabled} setIsOptionDisabled={setIsOptionDisabled} setIsCorrectAnswer={setIsCorrectAnswer} />}
      <ScoreH2>Question {questionIndex + 1} out of {questions.length}</ScoreH2>
    </>
  )
}
