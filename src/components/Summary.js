import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { useHistory } from 'react-router-dom'

const Summary = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    history.push('/')
  }

  return (
    <div>
      <h1> Great work you managed to answer all the questions in our quiz! </h1>
      <button onClick={handleRestart}>
        Would you like to give it a go again?
      </button>
    </div>
  )
}

export default Summary
