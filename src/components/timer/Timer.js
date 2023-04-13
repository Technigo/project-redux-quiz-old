import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeWrapper>
      <Time>{seconds}</Time>
      <ButtonWrap>
        <ButtonStart onClick={() => setSeconds(true)}>Start</ButtonStart>
      </ButtonWrap>
    </TimeWrapper>
  )
}

const TimeWrapper = styled.div`
width: 50%;
height: 50vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Time = styled.nr`
font-size: 20px;
`
const ButtonWrap = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`

const ButtonStart = styled.button`
padding: 10px;
  color: white;
  border-radius: 10px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  width: 133px;
  background-color:red;
  position: absolute;
  bottom: 150px;
  margin-left: 180px;
  text-transform: uppercase;

  &:hover {
    background-color: black;
    color: violet;
    cursor: pointer;
  }
`