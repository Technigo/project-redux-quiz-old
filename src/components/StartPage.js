/* eslint-disable */
import React from "react";

const StartPage = ({ start }) => {
  return (
    <div className="start-container">
      <h1>Technigo Team Quiz</h1>
      <button className="next-button" onClick={() => start(true)}>
        Start
      </button>
    </div>
  );
};
export default StartPage;
