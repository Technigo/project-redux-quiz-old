import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz'

const Options = ({ option }) => {
  const dispatch = useDispatch()

  const onSubmitAnswer = () => {
    dispatch(quiz.actions.submitanswer)
  }
  return (
    <div>
      <button
        type="button"
        onClick={onSubmitAnswer}>
        {option}
      </button>
    </div>
  )
}

export default Options