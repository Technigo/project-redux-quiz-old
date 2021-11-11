import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SummaryContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 80px auto;
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

const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);

  return (
    <SummaryContainer>
      <SummaryScore>
        You got {rightAnswers.length} out of {question.length}
      </SummaryScore>
      <SummaryText>
        {(rightAnswers.length <= 2 && <p>You suck!</p>) ||
          (rightAnswers.length <= 5 && <p>You are mediocre!</p>) ||
          (rightAnswers.length <= 8 && <p>You rock!</p>) ||
          (rightAnswers.length >= 9 && <p>You are a legend!</p>)}
      </SummaryText>
    </SummaryContainer>
  );
};

export default Summary;
