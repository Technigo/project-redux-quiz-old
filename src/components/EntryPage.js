import React from "react";
import { useDispatch } from "react-redux";

import { quiz } from "../reducers/quiz";

export const EntryPage = () => {
  const dispatch = useDispatch();
  const toNextQ = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };
  return (
    <>
      <h2>This is the landing page </h2>
      <button type="submit" onClick={toNextQ}>
        Start the quiz
      </button>
    </>
  );
};
