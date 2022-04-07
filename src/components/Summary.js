import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  console.log(answers);
  let result = 0;
  answers.forEach((answer) => {
    console.log(answer);
    if (answer.isCorrect) {
      result = result + 1;
    }
  });
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(quiz.actions.restart({}));
  };
  return (
    <div>
      <h1>Summary</h1>
      <p>You got {result} /5 </p>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
};
export default Summary;
