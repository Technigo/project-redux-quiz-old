import React from 'react'
import { useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const RestartBtn2 = () => {
  const dispatch = useDispatch()

  return (
    <button
      className='restart-btn2'
      type='button'
      onClick={() => {
        dispatch(quiz.actions.restart())
      }}
    >
      <i className='fas fa-arrow-circle-left' />
      &nbsp;&nbsp;<p>Play it again Sam!</p>
    </button>

  )
}
