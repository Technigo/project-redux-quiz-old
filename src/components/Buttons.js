import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'


export const NextButton = () => {
  const dispatch = useDispatch()

    // code given in notion
    const onClickNext = () => {
      dispatch(quiz.actions.goToNextQuestion())
    }
    return (
    <button
      type="button"
      onClick={onClickNext}>
        Next question
    </button> 
  )
};
  
  
export const SubmitButton = () => {
  const dispatch = useDispatch()

  // code given in notion
  const onClickSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <button
      type="button"
      onClick={onClickSubmit}>
      Submit
    </button>
  )
}

    

