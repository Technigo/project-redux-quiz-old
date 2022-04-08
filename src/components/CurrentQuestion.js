/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from 'reducers/quiz'
import { Summary } from 'components/Summary'
import { ProgressBar } from 'components/ProgressBar'

export const QuestionBackground = styled.div`
  margin: 0;
  background-color: #326886;
  height: 100vh;
  width: 100%
  padding: 30px;
  padding-top: 50px;
  z-index: 0;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: ripple 15s infinite;
    z-index: 2;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.9);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(0.8);
    }
  }
  
  .small {
    width: 60px;
    height: 60px;
    left: 65px;
    top: 61%;
    background-color: #b58526;
  }

  .medium {
    width: 110px;
    height: 110px;
    left: -10px;
    top: 68%;
    background-color: #b58526;
  }

  .large {
    width: 200px;
    height: 200px;
    left: -10px;
    top: 83%;
    background-color: #b58526;
  }

  @media (max-width: 768px) {
    .small {
      width: 30px;
      height: 30px;
      left: 30px;
      top: 82%;
      background-color: #b58526;
    }
  
    .medium {
      width: 50px;
      height: 50px;
      left: -20px;
      top: 88%;
      background-color: #b58526;
    }
  
    .large {
      width: 100px;
      height: 100px;
      left: -20px;
      top: 96%;
      background-color: #b58526;
    }
  }

`
const QuestionContainer = styled.div`
  background-color: #7da7be;
  margin-top: 10%;
  margin: auto;
  padding: 30px;
  width: 50vw;
  border-radius: 10px;
  border: #b58526 solid 2px;
  text-align: center;
  z-index: 2;

  h1 {
    color: #d2e9f5;
    font-size: 25px;
  }

  h2 {
    color: #435a67;
    font-size: 20px;
  }

  .text {
    z-index: 2;
  }

  .option-btn {
    border: none;
    background-color: #d2e9f5;
    width: 100px;
    height: 50px;
    padding: 10px;
    margin: 10px;
    border-radius: 60px;
    color: #326886;
    cursor: pointer;
  }

  .incorrect-answer {
    background-color: #326886;
    color: gray;
    border: solid gray;
  }

  .correct-answer {
    background-color: #f5ca73;
    color: #326886;
  }

  .next-btn {
    border: none;
    padding: 10px;
    margin: 10px;
    border-radius: 50px;
    color: #326886;
    cursor: pointer;
    font-size: 12px;
    margin-top: 25px;
    border: solid gray;
  }

  button[disabled] {
    cursor: not-allowed;
  }
`

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const userAnswer = useSelector((state) =>
    state.quiz.answers.find((answer) => question.id === answer.questionId)
  )

  const dispatch = useDispatch()

  const onNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  if (quizOver === true) {
    return <Summary />
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <QuestionBackground>
      <QuestionContainer>
        <div className="text">
          <div className="circle large"></div>
          <div className="circle medium"></div>
          <div className="circle small"></div>
          <h2>Question:</h2>
          <h1>{question.questionText}</h1>
          {question.options.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={
                    userAnswer && index === question.correctAnswerIndex
                      ? 'correct-answer option-btn'
                      : userAnswer && index === userAnswer.answerIndex
                      ? 'incorrect-answer option-btn'
                      : 'option-btn'
                  }
                  type="button"
                  key={item}
                  onClick={() => onAnswerSubmit(question.id, index)}
                  disabled={userAnswer}
                >
                  {item}
                </button>
              </div>
            )
          })}
          <div>
            <button
              type="button"
              onClick={() => onNextButton()}
              disabled={!userAnswer}
              className="next-btn"
            >
              Next question
            </button>
          </div>
          <ProgressBar />
        </div>
      </QuestionContainer>
    </QuestionBackground>
  )
}
