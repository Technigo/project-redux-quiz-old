import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const Counter = () => {
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  return <CounterWrapper>{counter + 1}/5</CounterWrapper>;
};

export default Counter;
