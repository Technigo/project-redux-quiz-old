import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 10px;
  background-color: red;
`;

const Counter = () => {
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  const question = useSelector((state) => state.quiz.questions);

  return (
    <CounterWrapper style={{ width: `${(question.length - counter) * 10}%` }}>
      {counter + 1}/5
    </CounterWrapper>
  );
};

export default Counter;
