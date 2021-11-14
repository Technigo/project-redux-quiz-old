import { useSelector, useDispatch } from "react-redux";
import { timerSlice } from "../reducers/timer";
import React, { useEffect } from "react";
import styled from "styled-components";

const TimerStyle = styled.p`
  display: inline-block;
  margin: 0;

  @media (min-width: 768px) {
    margin: 20px;
  }
npm start`;

export const Timer = () => {
  const timerValue = useSelector((store) => store.timer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(timerSlice.actions.countUp());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <TimerStyle>
      <span role="img" aria-label="timer">
        ⏳
      </span>
      {timerValue} seconds
    </TimerStyle>
  );
};
