import React from "react";
import { useDispatch } from "react-redux";

import { quiz } from "../reducers/quiz";

export const Summary = () => {
  const dispatch = useDispatch();

  const anotherTry = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <>
      <div>Thats the draft of summary page</div>
      <button type="submit" onClick={anotherTry}>
        Try Again
      </button>
    </>
  );
};
