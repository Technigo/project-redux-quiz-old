import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const StyledSummary = styled.div`
  .summary-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.6);
    width: 50%;
    min-width: 300px;
    margin: auto;
    text-align: center;
    padding-bottom: 30px;
  }

  h2 {
    margin: 10px 10px 30px 10px;
  }

  .restart {
    margin-top: 13px;
    margin-bottom: 10px;
    display: inline-block;
    border-radius: 3px;
    padding: 5px;
    width: 8rem;
    background: black;
    color: magenta;
    border: 2px solid black;
    font-family: 'Bebas Neue', cursive;
  }
`

export const Summary = () => {
  const answerCheck = useSelector((state) => state.quiz.answers)
  const correctAnswers = answerCheck.filter((answer) => answer.isCorrect)
  const dispatch = useDispatch()

  const musicLoverWow = correctAnswers.length > 3
  const musicLoverNo = correctAnswers.length <= 3
  const restart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <StyledSummary>
      <div className='summary-container'>
        <div>
          {musicLoverWow && <h2>Wow you are a true music lover!</h2>}
          {musicLoverNo && (
            <h2>Nice try but you got some more music listening to do!</h2>
          )}
          You got {correctAnswers.length}/{answerCheck.length} correct answers.
        </div>
        <button className='restart' onClick={restart}>
          Restart the quiz
        </button>
      </div>
    </StyledSummary>
  )
}
