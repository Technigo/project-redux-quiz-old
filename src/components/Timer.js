import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { quiz } from "reducers/quiz";

const Timer = () => {
  let totalSeconds = 0;
  let timeStart = setInterval(setTime, 1000);

  return <p></p>;
};
export default Timer;
