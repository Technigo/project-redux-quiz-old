/* eslint-disable max-len */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { quiz } from 'reducers/quiz'
import { SummaryStyling } from 'styling/SummaryStyling'
/* import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'; */

export const Summary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const answers = useSelector((store) => store.quiz.answers)
  const nrOfCorrect = useSelector((store) => store.quiz.answers.filter((answer) => answer.isCorrect));
  console.log(nrOfCorrect);
  const nrOfQuestion = useSelector((store) => store.quiz.questions);

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    navigate('/')
  }
  return (
    <SummaryStyling>
      <h1>Summary goes here</h1>
      <div>
        {answers.map((answer) => (
          <div
            key={answer.question.id}>
            <p>{answer.question.questionText}</p>
            <p>{answer.answer}
              <span> {answer.isCorrect ? ' ✅' : ' ❌'}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div>
        {`${nrOfCorrect.length}`}/{nrOfQuestion.length} correct
      </div>
      <div>
        <button onClick={handleRestart} type="button">RESTART</button>
      </div>
    </SummaryStyling>
  )
}