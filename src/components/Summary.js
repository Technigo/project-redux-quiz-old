import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const result = answers.filter((answer) => answer.isCorrect).length;
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(quiz.actions.restart());
  };
  return (
    <article className="summary">
      <div className="summary-content">
        <h1 className="summary-title">Summary</h1>
        <p className="summary-result">
          You got {result} correct answer(s) <br /> out of 5
        </p>
        <button className="start-button" onClick={restart}>
          Restart Quiz
        </button>
      </div>
    </article>
  );
};
export default Summary;
