/* eslint-disable quotes */
import React from "react";
import { CurrentQuestion } from "./CurrentQuestion";

const StartPage = () => {
  const [start, setStart] = React.useState(false);
  const onButtonClick = () => {
    setStart(true);
  };
  if (start) {
    return <CurrentQuestion />;
  } else {
    return (
      <div className="start">
        <img src="./assets/background-start.jpg" alt="" />
        <div className="start-text">
          {" "}
          <h1 className="start-heading">
            Welcome to <br />F <span className="red-dot"></span> R{" "}
            <span className="blue-dot"></span> I{" "}
            <span className="yellow-dot"></span> E{" "}
            <span className="red-dot"></span> N{" "}
            <span className="yellow-dot"></span> D{" "}
            <span className="blue-dot"></span> S <br />
            Trivia quiz!
          </h1>
          <button
            className="start-button"
            type="button"
            onClick={onButtonClick}
          >
            Start the quiz!
          </button>
        </div>
      </div>
    );
  }
};

export default StartPage;
