import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { Progressbar } from '../lib/Progressbar'

export const Timer = () => {
  const timerstart = useSelector((state) => state.quiz.timerStart)
  const deciseconds = useSelector((state) => state.quiz.deciseconds)
  const dispatch = useDispatch()

  useEffect(() => {
    let timerinterval = null
    if (deciseconds === 0) {
      dispatch(quiz.actions.setTimer())
      dispatch(quiz.actions.enableNextButton())
      clearInterval(timerinterval)
    }
    if (timerstart) {
      timerinterval = setInterval(() => {
        dispatch(quiz.actions.countdowndeciseconds())
      }, 100)
    }
    return () => clearInterval(timerinterval)
  }, [timerstart, deciseconds, dispatch])

  return (
    <>
      <Progressbar />
    </>
  )
}