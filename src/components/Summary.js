import React from 'react'
import { Button } from 'components/Buttons'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

const Summary = () => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(quiz.actions.restart());
  }

  return (
    <div>
      <h1>Summary</h1>
      <Button buttonText="restart" onClick={() => onRestart} />
    </div>
  )
}

export default Summary;