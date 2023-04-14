
/* eslint-disable max-len */
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
// import { Timer } from 'components/Timer';
import { Title } from 'reusable-components/Title'
import { Button, ButtonContainer } from 'reusable-components/Button'
import { Image } from 'reusable-components/Image'
import { CurrentQuestionContainer, ImgBox, OptionsImage } from './CurrentQuestionStyling'
import { ProgressBar } from '../ProgressBar';

export const CurrentQuestion = (props) => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const btnColor = useSelector((store) => store.quiz.btnColor)
  const correctAnswerIndex = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex].correctAnswerIndex)
  const { setScore, score } = props
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState('')
  const dispatch = useDispatch()
  const countdownRef = useRef(null)

  const onAnswerSubmit = (questionId, answerIndex) => {
    if (correctAnswerIndex === answerIndex) {
      setScore(score + 3)
    } else {
      setScore(score - 2)
    }
    setSelectedAnswerIndex(answerIndex)
    setTimeout(() => dispatch(quiz.actions.submitAnswer({ questionId, answerIndex })), 1000)
    setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 1500)
    countdownRef.current.stop();
    setTimeout(() => countdownRef.current.start(), 1500)
    console.log(questionId)
  }

  console.log('score:', score)

  const buttonStyle = (answerIndex) => {
    if (selectedAnswerIndex === answerIndex) {
      return { backgroundColor: btnColor }
    }
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <CurrentQuestionContainer>
      {/* <Timer countdownRef={countdownRef} setScore={setScore} score={score} /> */}
      <ImgBox>
        <Image src={question.img} alt="img" />
        <ProgressBar />
      </ImgBox>
      <Title>Question: {question.questionText}</Title>
      <ButtonContainer>
        {question.options.map((answer, index) => {
          return (
            <Button
              answerBtn
              style={buttonStyle(index)}
              type="button"
              id={index}
              onClick={() => onAnswerSubmit(question.id, index)}
              key={answer}>
              {answer.includes('.png') ? <OptionsImage src={answer} alt="option" /> : <p> {answer} </p>}
            </Button>
          )
        })}
      </ButtonContainer>
    </CurrentQuestionContainer>

  )
}
