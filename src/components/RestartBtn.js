import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const RestartBtn = () => {
  const dispatch = useDispatch()
  return (
    <button
      className='restart-btn'
      type='button'
      onClick={() => {
        dispatch(quiz.actions.restart())
      }}
    >
      <span role='img' aria-label='arrow left emoji'>
        ⬅
      </span>
      &nbsp;&nbsp;Back to basic
    </button>
  )
}
