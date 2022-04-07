import React from "react";
import { StartBtn, StartCard, Main, StartText } from "styles";

const StartView = ({ quizStart, setQuizStart }) => {
  return (
    <Main>
      <StartCard>
        <h1>How well do you know your recyling?</h1>
        <StartText>
          A recent study shows that 99% of Stockholm residents recycle in one way or another.
          However, not everyone is doing it right. How good are you at recyling items correctly?
          Test your knowledge in our quiz!
        </StartText>
        <StartBtn onClick={() => setQuizStart(!quizStart)}>Start quiz</StartBtn>
      </StartCard>
    </Main>
  );
};

export default StartView;
