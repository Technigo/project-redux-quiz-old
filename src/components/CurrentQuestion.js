import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

// import { quiz } from 'reducers/quiz'
import { Option } from './Option'
import { NextButton, SubmitButton } from './Buttons'

// ----- STYLED COMPONENTS -----
const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
`

const QuestionH1 = styled.h1`
  text-align: center;
  font-size: 20px;
  height: 100px;
`

const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    max-height: 200px;
    min-width: 100px;
  }
`

const OptionsContainer = styled.div`
  padding-top: 20px;
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`

const ScoreH2 = styled.h2`
  /* code here */
`
// ----- STYLED COMPONENTS -----

export const CurrentQuestion = () => {

  /* 
  // question could come from the previous selector in the last example
  const answer = useSelector((state) => state.quiz.answers.find((a) => ( a.questionId === question.id ))) 
  */

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questions = useSelector((state) => state.quiz.questions)
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <Main>
      <QuestionH1>Question: {question.questionText}</QuestionH1>
      <ImageContainer>
        <img src={question.img} alt="" />
      </ImageContainer>
      <OptionsContainer>
        {question.options.map((option, answerIndex) => (
          <Option
            key={answerIndex}
            option={option}
            answerIndex={answerIndex}
            isCorrectAnswer={isCorrectAnswer}
            setIsCorrectAnswer={setIsCorrectAnswer} />
        ))}
      </OptionsContainer>
      {!quizOver && questionIndex === questions.length - 1 ? <SubmitButton /> : <NextButton setIsCorrectAnswer={setIsCorrectAnswer} />}
      <ScoreH2>Question {questionIndex + 1} out of {questions.length}</ScoreH2>
    </Main>
  )
}

