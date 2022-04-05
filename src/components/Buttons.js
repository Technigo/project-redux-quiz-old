import React from 'react'
import { useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'

const Buttons = () => {

  const dispatch = useDispatch()

  return(
    <div>
      <button type="submit" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
    </div>
  )
}

export default Buttons