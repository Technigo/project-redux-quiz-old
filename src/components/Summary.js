import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  console.log("SUMMARY", answers);

  return answers.map((answer) => {
    return (
      <SummaryAnswer key={answer.questionId}>
        <Question>{answer.question.questionText} </Question>
        <AnswerWrapper>
          {answer.isCorrect && (
            <CheckIcon>
              <FontAwesomeIcon icon={faCheck} />
              <span>Your answer:</span>
            </CheckIcon>
          )}
          {!answer.isCorrect && (
            <CrossIcon>
              <FontAwesomeIcon icon={faTimes} />
              <span>Your answer:</span>
            </CrossIcon>
          )}

          <span>{answer.answer}</span>
          <CheckIcon>
            <FontAwesomeIcon icon={faCheck} /> <span>Correct answer:</span>
          </CheckIcon>

          <span>
            {answer.question.options[answer.question.correctAnswerIndex]}
          </span>
        </AnswerWrapper>
      </SummaryAnswer>
    );
  });
};

const SummaryAnswer = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 6px;
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const Question = styled.span`
  font-weight: bold;
  margin: 4px 0 10px 0;
`;

const AnswerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CheckIcon = styled.span`
  display: grid;
  grid-template-columns: auto 1fr;
  color: green;
  column-gap: 7px;
`;

const CrossIcon = styled.span`
  display: grid;
  grid-template-columns: auto 1fr;
  color: red;
  column-gap: 10px;
`;
