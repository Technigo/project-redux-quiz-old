import React from "react";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <header>
      <h1>Sports Quiz</h1>
      <Link to="/quiz">
        <button>Start Quiz!</button>
      </Link>
    </header>
  )
};