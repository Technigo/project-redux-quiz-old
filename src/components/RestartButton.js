import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Buttons } from './Styling/GlobalStyles'

const RestartButton = () => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <Buttons
        type="button"
        onClick={onRestart}>
            RESTART
      </Buttons>
    </div>
  )
}
export default RestartButton