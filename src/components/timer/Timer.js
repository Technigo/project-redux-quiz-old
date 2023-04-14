import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import IconImg from 'assets/hourglass.svg'
import Rotate from './TimerAni'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <TimerStyle>
      <Rotate> <Icon src={IconImg} alt="timer-icon" /></Rotate>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </TimerStyle>
  );
};

const TimerStyle = styled.div`
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    background: transparent;
    font-size: 16px;
    gap: 10px;
    background-color: rgb(61, 133, 198);
`
export const Icon = styled.img`
width: 20px;
height: 20px;
margin-top: 30px;
`