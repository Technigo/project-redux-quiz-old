import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const Timer = () => {
  const timerstart = useSelector((state) => state.quiz.timerStart)
  const seconds = useSelector((state) => state.quiz.seconds)
  const dispatch = useDispatch()

  useEffect(() => {
    let timerinterval = null
    if (seconds === 0) {
      dispatch(quiz.actions.setTimer())
      clearInterval(timerinterval)
    }
    if (timerstart) {
      timerinterval = setInterval(() => {
        dispatch(quiz.actions.countdownSeconds())
      }, 1000)
    }
    return () => clearInterval(timerinterval)
  }, [timerstart, seconds, dispatch])

  return (
    <>
      <p>{(seconds > 0) ? `Time is ${seconds}` : 'Time is up'}</p>
      <div id="progressbar" className="progressbar"><div className="inner" /></div>
    </>
  )
}