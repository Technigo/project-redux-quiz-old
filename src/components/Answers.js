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
  justify-content: space-around;
`;

const HeadlineOne = styled.h2`
  font-size: 18px;
  margin-left: 5%;
`;

const HeadlineTwo = styled.h2`
  font-size: 18px;
  margin-right: 5%;
`;

const AnswerSection = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-left: 30px;
  // margin-right: 30px;
  text-align: center;
`;

const YourAnswer = styled.p`
  color: white;
  margin-top: 0;
  font-size: 15px;
`;
const QuizAnswer = styled.p`
  color: white;
  margin-top: 0;
  font-size: 15px;
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
