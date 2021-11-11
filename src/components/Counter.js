import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 30px;
  background-color: red;
`;

const Pragraph = styled.p`
  margin: 0;
  text-align: center;
`;

const Counter = () => {
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  const question = useSelector((state) => state.quiz.questions.length);

  return (
    <>
      <CounterWrapper style={{ width: `${(question - counter) * 10}%` }}>
        {(question - counter) * 10}%
      </CounterWrapper>
      <Pragraph>You have {question - counter} questions to finish!</Pragraph>
    </>
  );
};

export default Counter;
