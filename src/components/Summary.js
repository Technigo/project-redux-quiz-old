import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { CurrentQuestion } from "components/CurrentQuestion";

export const Summary = (state) => {
  const dispatch = useDispatch();
  const checkIfCorrect = useSelector((state) => state.quiz.answers);

  const total = checkIfCorrect.filter((x) => x.isCorrect === true);

  console.log(checkIfCorrect);
  console.log(total);
  return (
    <div>
      <h1>Summary</h1>
      <h2>You got {total.length} /6</h2>
      <button onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
    </div>
  );
};
