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
      <div>
        <h1>Welcome to FRIENDS Trivia quiz!</h1>
        <button type="button" onClick={onButtonClick}>
          Start the quiz!
        </button>
      </div>
    );
  }
};

export default StartPage;
