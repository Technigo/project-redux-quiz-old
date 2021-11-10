import React from "react";
import { useDispatch } from "react-redux";

import { quiz } from "../../reducers/quiz";

export const EntryPage = () => {
  const dispatch = useDispatch();
  const toNextQ = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };
  return (
    <>
      <h2>Are you a foodie? Test your knowledge</h2>
      <button className="submit-button" type="submit" onClick={toNextQ}>
        Start the quiz
      </button>
    </>
  );
};
