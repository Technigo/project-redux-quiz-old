import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(() => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <TimerStyle>TIMER:{seconds}</TimerStyle>
  )
}

const TimerStyle = styled.div`
padding: 15px;
border: none;
border-radius: 5px;
font-weight: bold;
background: transparent;
font-size: 12px;
`
