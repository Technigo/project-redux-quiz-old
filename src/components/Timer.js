import React, { useEffect, useState } from 'react'

export const Timer = ({ duration }) => {
  const [seconds, setSeconds] = useState(duration)
  const [timerstart, setTimerStart] = useState(true)

  useEffect(() => {
    let timerinterval = null
    if (seconds === 0) {
      setTimerStart(false)
      clearInterval(timerinterval)
    }
    if (timerstart) {
      timerinterval = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
    }
    return () => clearInterval(timerinterval)
  }, [timerstart, seconds])

  return (
    <>
      <p>{(seconds > 0) ? `Time is ${seconds}` : 'Time is up'}</p>
      <div id="progressbar" className="progressbar"><div className="inner" /></div>
    </>
  )
}