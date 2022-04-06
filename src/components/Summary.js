import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  console.log(answers);

  return (
    <div>
      <h1>Summary</h1>
    </div>
  );
};
export default Summary;
