import React from "react";
import { useDispatch } from "react-redux";

import { quiz } from "reducers/quiz";

const Buttons = ({ label, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Buttons;
