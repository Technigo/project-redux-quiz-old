import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  min-width: 50px;
  height: 30px;
  background-color: black;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 992px) {
    max-width: 550px;
  }
`;

const Counter = () => {
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  const question = useSelector((state) => state.quiz.questions.length);

  return (
    <CounterWrapper style={{ width: `${(question - counter) * 10}%` }}>
      {counter + 1}/ {question}
    </CounterWrapper>
  );
};

export default Counter;
