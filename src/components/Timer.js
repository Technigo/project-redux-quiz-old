import { useSelector, useDispatch } from "react-redux";
import { timerSlice } from "../reducers/timer";
import React, { useEffect } from "react";
import styled from "styled-components";

const TimerStyle = styled.p`
  display: inline-block;
  margin: 0;
`;

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
  }, []);

  return (
    <TimerStyle>
      <span role="img" aria-label="timer">
        ⏳
      </span>
      {timerValue} seconds
    </TimerStyle>
  );
};

// import React from "react";

// import styled from "styled-components";

// import { quiz } from "reducers/quiz";

// const Timer = () => {
//   let totalSeconds = 0;
//   let timeStart = setInterval(setTime, 1000);

//   return <p></p>;
// };
// export default Timer;
