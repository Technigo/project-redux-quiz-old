import React from 'react'
import { useDispatch } from 'react-redux'
import { NextButton,
         BtnText,
        NextBtnWrapper } from 'styles'
// import arrow from 'images/arrow.png'

import { quiz } from 'reducers/quiz'

const Buttons = () => {

  const dispatch = useDispatch()

  return(
    <div>
      <NextBtnWrapper>
      <NextButton type="submit" onClick={() => dispatch(quiz.actions.goToNextQuestion())}><BtnText>Next Question</BtnText><img width={40} src="./images/arrow.png" alt="arrow"/></NextButton>
      </NextBtnWrapper>
    </div>
  )
}

export default Buttons