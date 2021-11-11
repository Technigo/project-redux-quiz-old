/* eslint-disable */
import React from "react";

const StartPage = ({ start }) => {
  return (
    <div className="start-container">
      <h1>Technigo Team Quiz</h1>
      <div className="start-image">
        <img src="/rabbit.jpg" alt="rabbit" />
      </div>
      <button className="re-start-button" onClick={() => start(true)}>
        Start
      </button>
    </div>
  );
};
export default StartPage;
