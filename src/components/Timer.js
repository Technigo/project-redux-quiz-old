/* eslint-disable */ 
import React, { useEffect, useState } from 'react';
import { quiz } from 'reducers/quiz';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const Counter = styled.div`
  margin: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #33001A;
`
const Timer = ({ questionId }) => {
  const countdown = useSelector((state) => state.quiz.countdown)
  const [value, setValue] = useState(countdown);
  const dispatch = useDispatch();
  const tick = () => {
    setValue(value - 1)
    quiz.actions.setCountdown(value - 1)
  }

  useEffect(() => {
    let timer
    if (countdown > 0) {
      timer = setInterval(tick, 1000)
    }

    return () => clearInterval(timer);
  }, [countdown, value]);

  useEffect(() => {
    if (value === 0) {
      dispatch(quiz.actions.goToNextQuestion());
    }
  }, [value, dispatch]);

  useEffect(() => {
    dispatch(quiz.actions.resetCountdown);
    setValue(countdown)
  }, [questionId, dispatch, countdown])

  return (
    <Counter>
      <div>Countdown: {value}</div>
    </Counter>
  );
}

export default Timer;