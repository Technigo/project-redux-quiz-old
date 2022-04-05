import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

// import { quiz } from 'reducers/quiz'
import { Option } from './Option'
import { NextButton, SubmitButton } from './Buttons'

// ----- STYLED COMPONENTS -----
const QuestionH1 = styled.h1`
  /* code here */
`

const ImageContainer = styled.div`
  border: 5px solid red;
  width: fit-content;

  & img {
    /* code here */
  }
`

const OptionsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
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
    <>
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
    </>
  )
}

