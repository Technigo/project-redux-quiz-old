
/* eslint-disable max-len */
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestionContainer, ImgBox, Image, Title, ButtonBox } from './CurrentQuestionStyling'
import { Timer } from 'components/Timer';
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
      <ImgBox>
        <Image src={question.img} alt="img" />
      </ImgBox>
      <ProgressBar currentQuestionId={currentQuestionId} />
      <Title>Question: {question.questionText}</Title>
      <ButtonBox>
      <Timer countdownRef={countdownRef} setScore={setScore} score={score} />
      <h1>Question: {question.questionText}</h1>   
        <ProgressBar />
        {question.options.map((answer, index) => {
          return (
            <button
              style={buttonStyle(index)}
              type="button"
              id={index}
              onClick={() => onAnswerSubmit(question.id, index)}
              key={answer}>
              {answer}
            </button>
          )
        })}
      </ButtonBox>
    </CurrentQuestionContainer>

    

  )
}
