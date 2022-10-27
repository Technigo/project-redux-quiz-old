import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Buttons } from './Styling/GlobalStyles'

const NextButton = ({ setOptionDisabled }) => {
  const dispatch = useDispatch()
  const onNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setOptionDisabled(false)
  }

  return (
    <div>
      <Buttons
        type="submit"
        onClick={() => onNext()}> {/* {onNext}> */}
            Next
      </Buttons>
    </div>
  )
}
export default NextButton