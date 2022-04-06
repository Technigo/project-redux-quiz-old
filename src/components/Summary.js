import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  console.log(answers);

  return (
    <div>
      <h1>Summary</h1>
    </div>
  );
};
export default Summary;
