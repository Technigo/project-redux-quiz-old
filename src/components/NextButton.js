import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Buttons } from './Styling/GlobalStyles'

const NextButton = ({ setOptionDisabled, setNextDisabled, nextDisabled }) => {
  const dispatch = useDispatch()
  const onNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setOptionDisabled(false)
    setNextDisabled(true)
  }

  return (
    <div>
      <Buttons
        type="submit"
        disabled={nextDisabled}
        onClick={onNext}>
            Next
      </Buttons>
    </div>
  )
}
export default NextButton