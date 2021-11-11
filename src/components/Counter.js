import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  return <div>{counter + 1}/5</div>;
};

export default Counter;
