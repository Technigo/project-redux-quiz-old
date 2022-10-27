import React, { useEffect } from 'react';
import { quiz } from 'reducers/quiz';
import { useDispatch } from 'react-redux'

const Timer = () => {
  const [value, setValue] = React.useState(7);
  React.useEffect(() => {
    const timer = value > 0 && setInterval(() => setValue(value - 1), 1000);
    return () => clearInterval(timer);
  }, [value]);

  const dispatch = useDispatch();

  const restart = () => {
    setValue(7);
  };

  useEffect(() => {
    if (value <= 0) {
      dispatch(quiz.actions.goToNextQuestion());
      restart();
    }
  }, [value, dispatch]);

  return (
    <div className="counter">
      <div>Countdown: {value}</div>
    </div>
  );
}
export default Timer;