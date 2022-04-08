import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'
import styled from 'styled-components'

const StyledCurrentQuestion = styled.div`
  .question-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255, 0.6);
    padding-bottom: 30px;
    width: 50%;
    min-width: 300px;
    margin: auto;
  }

  h1 {
    font-size: 18px;
    margin: 20px;
    text-align: center;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    margin: 10px;
  }

  .btn-container {
    text-align: center;
  }

  .select-btn {
    display: inline-block;
    border-radius: 50px;
    padding: 5px;
    margin: 10px;
    width: 11rem;
    background: magenta;
    color: black;
    border: 2px solid black;
    font-family: 'Bebas Neue', cursive;
  }

  .next-btn {
    display: inline-block;
    border-radius: 3px;
    padding: 5px;
    width: 11rem;
    background: #fad02c;
    color: black;
    border: 2px solid black;
    font-family: 'Bebas Neue', cursive;
  }

  button:hover {
    opacity: 0.5;
  }
`

export const CurrentQuestion = () => {
  const [answer, setAnswer] = useState('')

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const quizOver = useSelector((store) => store.quiz.quizOver)

  const dispatch = useDispatch()

  const goToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setAnswer('')
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: answer,
      })
    )
  }

  if (quizOver === true) {
    return <Summary />
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const shouldShow = answer === 0 || answer === 1 || answer === 2
  const isCorrectAnswer = question.correctAnswerIndex === answer

  return (
    <StyledCurrentQuestion>
      <div className='question-container'>
        <h1>{question.questionText}</h1>

        <div className='btn-container'>
          {shouldShow && (
            <div>
              <h1>
                {isCorrectAnswer ? 'Yeah! You got that right!' : 'Haha nope!'}
              </h1>
              <div className='next-btn-container'>
                <button className='next-btn' onClick={() => goToNextQuestion()}>
                  Next!
                </button>
              </div>
            </div>
          )}

          {!shouldShow &&
            question.options.map((item, index) => {
              return (
                <button
                  className='select-btn'
                  type='button'
                  onClick={() => setAnswer(index)}
                  key={item}
                >
                  {item}
                </button>
              )
            })}
        </div>
        <h2>{0 + question.id}/5</h2>
      </div>
    </StyledCurrentQuestion>
  )
}
