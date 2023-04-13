import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import IconImg from 'assets/hourglass.jpeg'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(() => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <Icon src={IconImg} alt="timer-icon" />
      <TimerStyle>TIMER:{seconds}</TimerStyle>
    </>
  )
}

const TimerStyle = styled.div`
padding: 15px;
border: none;
border-radius: 5px;
font-weight: bold;
background: transparent;
font-size: 12px;
background: red;
`
const Icon = styled.img`
display: flex;
width: 20px;
height: 20px;
margin-top: 10px;
`