import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { quiz } from "reducers/quiz";
import { Answers } from "./Answers";

const SummaryContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 80px auto;

  @media (min-width: 768px) {
    margin: 120px auto;
    width: 350px;
  }
`;

const SummaryScore = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const SummaryText = styled.div`
  text-align: center;
  font-size: 20px;
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
  // const answerText = useSelector((store) => store.quiz.answers.answer);

  console.log(answer);

  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(
      quiz.actions.restart({
        initialState,
      })
    );
  };
  console.log(question);

  return (
    <SummaryContainer>
      <SummaryScore>
        You got {rightAnswers.length} out of {question.length}
      </SummaryScore>
      <SummaryText>
        {(rightAnswers.length <= 2 && <p>Are you a f@cking millenial?</p>) ||
          (rightAnswers.length <= 5 && <p>You are mediocre!</p>) ||
          (rightAnswers.length <= 8 && <p>You rock!</p>) ||
          (rightAnswers.length >= 9 && <p>You are a legend!</p>)}
      </SummaryText>
      <Answers />
      <RestartButton onClick={() => onRestart()}>Restart</RestartButton>
    </SummaryContainer>
  );
};

export default Summary;
