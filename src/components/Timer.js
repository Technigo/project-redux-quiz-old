import React, { useEffect, useState } from 'react';
import { quiz } from 'reducers/quiz';
import { useDispatch, useSelector } from 'react-redux'

const Timer = ({ questionId }) => {
  const countdown = useSelector((state) => state.quiz.countdown)
  const [value, setValue] = useState(countdown);
  const dispatch = useDispatch();
  const tick = () => {
    console.log('tick')
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
      // gör så att man svarar fast fel? pga skickar ej in att man svarar nu, bara går vidare
    }
  }, [value, dispatch]);

  useEffect(() => {
    dispatch(quiz.actions.resetCountdown);
    setValue(countdown)
  }, [questionId])

  return (
    <div className="counter">
      <div>Countdown: {value}</div>
    </div>
  );
}

export default Timer;