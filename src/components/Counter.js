import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const Counter = () => {
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  return <div>{counter + 1}/5</div>;
};

export default Counter;
