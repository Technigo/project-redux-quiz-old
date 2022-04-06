import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { QuestionBackground } from 'components/CurrentQuestion'
import { quiz } from 'reducers/quiz'

const SummaryStyling = styled.div`
  margin-top: 10%;
  margin-left: 10%;
  background-color: #7da7be;
  padding: 30px;
  border-radius: 10px;
  border: #b58526 solid 2px;
  text-align: center;

  .restart-btn {
    border: none;
    padding: 15px;
    margin: 10px;
    border-radius: 50px;
    color: #326886;
    background-color: #d2e9f5;
    cursor: pointer;
  }

  h1 {
    color: #d2e9f5;
    font-size: 25px;
  }

  h3 {
    color: #f5ca73;
  }
`

export const Summary = () => {
  const dispatch = useDispatch()
  const answerSummary = useSelector((state) => state.quiz.answers)
  const onRestartButton = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <QuestionBackground>
      <SummaryStyling>
        <div>
          <h1>Good work! These are your answers:</h1>
          {answerSummary.map((answer) => {
            console.log(answer)
            return (
              <h3 key={answer.questionId}>
                {' '}
                {answer.question.questionText}
                {answer.answer}
              </h3>
            )
          })}
          <button
            type="button"
            onClick={() => onRestartButton()}
            className="restart-btn"
          >
            Restart
          </button>
        </div>
      </SummaryStyling>
    </QuestionBackground>
  )
}
