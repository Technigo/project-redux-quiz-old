import React from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
=======
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
>>>>>>> 0c55a93c24cae1c3f704150096eac215dd9160d8

const Counter = () => {
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  return <CounterWrapper>{counter + 1}/5</CounterWrapper>;
};

export default Counter;
