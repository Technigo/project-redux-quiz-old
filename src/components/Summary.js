import React from "react";
import { quiz } from "../reducers/quiz";
import { Link } from "react-router-dom";

export const Summary = (CurrentQuestion) => {
  return (
    <div>
      Summary
      <Link to="/quiz">
        <button>Wanna play again?</button>
      </Link>
    </div>
  );
};
