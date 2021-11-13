import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components/macro";

import { quiz } from "../reducers/quiz";
import { FallingEmojis } from "falling-emojis";

// styled components for summary
const SummaryContainer = styled.main`
  height: 100vh;
  max-width: 100vw;
`;

const SummaryTextContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const SummaryText = styled.div`
  min-width: 320px;
  text-align: center;
`;

const SummaryTitle = styled.h2`
  font-size: 4rem;
  text-shadow: 1px 1px 0px #eb452b, 1px 1px 0px #efa032, 2px 2px 0px #46b59b,
    3px 3px 0px #017e7f, 4px 4px 0px #052939, 5px 5px 0px #c11a2b,
    6px 6px 0px #c11a2b, 6.5px 6.5px 0px #c11a2b;
`;

const SummaryScore = styled.p`
  font-size: 2rem;
  color: black;
  text-shadow: 1px 1px 0px #eb452b, 1px 1px 0px #efa032, 1px 2px 0px #46b59b;
`;

const RestartButton = styled.button`
  height: 35px;
  width: 130px;
  border-radius: 5px;
  color: black;
  background-color: #f79f92;
  cursor: pointer;

  &:hover {
    background-color: #da8072;
  }
`;

export const Summary = () => {
  const dispatch = useDispatch();

  // asking store to give us anwers from quiz object
  const answers = useSelector((state) => state.quiz.answers);

  // created this function to take restart function from the store
  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
  };

  /* for every correct answer, the score gets rised */
  answers.forEach((item) => {
    if (item.isCorrect) {
      dispatch(quiz.actions.riseScore());
    } else {
    }
  });

  const score = useSelector((state) => state.quiz.score);

  /* Here We use a if-statment w the score-value to get confetti or raindrops, install npm install --save falling-emojis and https://www.npmjs.com/package/react-confetti */
  return (
    <SummaryContainer>
      {score >= 4 ? (
        <FallingEmojis emoji={"🎉"} />
      ) : (
        <FallingEmojis emoji={"💧"} />
      )}
      <SummaryTextContent>
        <SummaryText>
          <SummaryTitle>Summary</SummaryTitle>
          <SummaryScore>
            Score: {score}/{answers.length}
          </SummaryScore>
          <RestartButton type="submit" onClick={() => restartQuiz()}>
            Restart the quiz
          </RestartButton>
        </SummaryText>
      </SummaryTextContent>
    </SummaryContainer>
  );
};
