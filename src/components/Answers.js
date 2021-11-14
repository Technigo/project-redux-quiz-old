import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerHeadline = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

const HeadlineOne = styled.h2`
  font-size: 18px;
`;

const HeadlineTwo = styled.h2`
  font-size: 18px;
`;

const AnswerSection = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const YourAnswer = styled.p`
  color: white;
  margin-top: 0;
  font-size: 15px;
  @media (min-width: 768px) {
    margin-right: 50px;
  }
`;
const QuizAnswer = styled.p`
  color: white;
  margin-top: 0;
  font-size: 15px;
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const Answers = () => {
  const answer = useSelector((store) => store.quiz.answers);
  return (
    <AnswerWrap>
      <AnswerHeadline>
        <HeadlineOne>Your answer</HeadlineOne>
        <HeadlineTwo>Correct answer</HeadlineTwo>
      </AnswerHeadline>
      {answer.map((item) => {
        return (
          <AnswerSection key={item.questionId}>
            <YourAnswer>{item.answer}</YourAnswer>
            <QuizAnswer>
              {item.question.options[item.question.correctAnswerIndex]}
            </QuizAnswer>
          </AnswerSection>
        );
      })}
    </AnswerWrap>
  );
};
