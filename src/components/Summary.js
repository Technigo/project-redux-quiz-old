import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { quiz } from "../reducers/quiz";
import { Answers } from "./Answers";
import { timerSlice } from "../reducers/timer";

const MainSummaryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SummaryContainer = styled.div`
  width: 300px;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin: 120px auto;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const SummaryScore = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-style: italic;
`;

const criticAnimation = keyframes`
0% { font-size: 16px; color: white; }
50% { font-size: 17px; color: yellow;}
100% { font-size: 16px;  color: red;}
`;

const SummaryText = styled.div`
  text-align: center;
  font-size: 16px;
  animation: ${criticAnimation} 0.7s infinite;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const RestartButton = styled.button`
  border-radius: 20px;
  width: 70px;
  height: 40px;
  padding: 10x;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  margin-bottom: 15px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  const initialState = useSelector((state) => state.quiz.initialState);
  const timerValue = useSelector((store) => store.timer.value);
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(
      quiz.actions.restart({
        initialState,
      })
    );

    dispatch(
      timerSlice.actions.reset({
        initialState,
      })
    );
  };

  console.log(question);

  return (
    <MainSummaryContainer>
      <SummaryContainer>
        <SummaryScore>
          You got {rightAnswers.length} out of {question.length} correct in{" "}
          {timerValue}
          sec
        </SummaryScore>
        <SummaryText>
          {(rightAnswers.length <= 2 && <p>Are you a f@cking millenial?</p>) ||
            (rightAnswers.length <= 5 && <p>You are mediocre!</p>) ||
            (rightAnswers.length <= 8 && <p>You rock!</p>) ||
            (rightAnswers.length >= 9 && <p>You are a legend!</p>)}
        </SummaryText>
        <Answers />

        <Link to="/">
          <RestartButton onClick={() => onRestart()}>Restart</RestartButton>
        </Link>
      </SummaryContainer>
    </MainSummaryContainer>
  );
};

export default Summary;
