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
  }

  h1,
  h2 {
    font-size: 18px;
    text-align: center;
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
  }

  .next-btn {
    display: inline-block;
    border-radius: 3px;
    padding: 5px;
    width: 11rem;
    background: lightblue;
    color: black;
    border: 2px solid black;
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

        {
          // example of optional rendering
          // tenerary operator
          // condition ? true : false
        }
        <div className='btn-container'>
          {shouldShow && (
            <div>
              <h1>{isCorrectAnswer ? 'Right answer' : 'Wrong answer'}</h1>
              <div className='next-btn-container'>
                <button className='next-btn' onClick={() => goToNextQuestion()}>
                  Next question!
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
