/* eslint-disable */
import React from "react";

const StartPage = ({ start }) => {
  return (
    <div className="start-container">
      <h1>KNOCK KNOCK...</h1>
      {/* <img className="start-image" src="/rabbit.jpg" alt="rabbit" /> */}
      <p className="rabbit-text">follow the white rabbit</p>
      <button className="next-button" onClick={() => start(true)}>
        START
      </button>
    </div>
  );
};
export default StartPage;
