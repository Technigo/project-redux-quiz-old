import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// A function in which we present the users answer and the correct answer. If the user has
// the correct answer we render a green check icon and if not a red cross will appear.
export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);

  return answers.map((answer) => {
    return (
      <SummaryAnswer key={answer.questionId}>
        <Question>{answer.question.questionText}</Question>
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

          <span>
            {/* Here we check if the typeof answer.answer is a object and then adapt the answer so that it works for objects aswell. */}
            {typeof answer.answer === "object"
              ? answer.answer.name
              : answer.answer}
          </span>
          <CheckIcon>
            <FontAwesomeIcon icon={faCheck} /> <span>Correct answer:</span>
          </CheckIcon>

          <span>
            {typeof answer.answer === "object"
              ? answer.question.options[answer.question.correctAnswerIndex].name
              : answer.question.options[answer.question.correctAnswerIndex]}
          </span>
        </AnswerWrapper>
      </SummaryAnswer>
    );
  });
};

// --------------------------------Styled component------------------------------------

const SummaryAnswer = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 6px;
  display: flex;
  flex-direction: column;
  margin: 0 15px;

  @media (min-width: 1025px) {
    font-size: 24px;
  }
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
