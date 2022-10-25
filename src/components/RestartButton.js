import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

const RestartButton = () => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <button
        type="button"
        onClick={onRestart}>
            restart
      </button>
    </div>
  )
}
export default RestartButton