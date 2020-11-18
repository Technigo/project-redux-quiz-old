import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

export const Summary = (state) => {
  const dispatch = useDispatch();
  const checkIfCorrect = useSelector((state) => state.quiz.answers);

  const total = checkIfCorrect.filter((x) => x.isCorrect);

  return (
    <div className="summary">
      <h1>
        <span role="img" aria-label="Trophy">
          🏆
        </span>{" "}
        Great job answering the questions!{" "}
        <span role="img" aria-label="Trophy">
          🏆
        </span>
      </h1>
      <h2>You got {total.length} /6</h2>
      <button
        className="restart-button"
        onClick={() => dispatch(quiz.actions.restart())}
      >
        Restart
      </button>
    </div>
  );
};
