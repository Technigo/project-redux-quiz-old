import React from "react";

export const Start = ({ start }) => {
  return (
    <div className="start-container">
      <h1>Technigo Team Quiz</h1>
      <button className="next-button" onClick={() => start(true)}>
        Start
      </button>
    </div>
  );
};
