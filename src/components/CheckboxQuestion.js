import React, { useState } from "react";
import styled from "styled-components";

export const CheckboxQuestion = ({
  question,
  setOnAnswerSubmit,
  onGoToNextQuestion,
}) => {
  const [hasClicked, setHasClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(false);

  return (
    <div>
      <Header3>{question.questionText}</Header3>
      {question.options.map((item, index) => {
        return (
          <LabelContainer key={item}>
            <label htmlFor="checkboxOption" />
            <span style={{ textAlign: "right" }}>{item}</span>
            <RadioInput
              style={{ backgroundColor: checked ? "red" : "white" }}
              id="checkboxOption"
              type="radio"
              onChange={(e) => {
                setChecked(true);
                setIndex(index);
              }}
              name="checked"
              required="required"
            />
          </LabelContainer>
        );
      })}
      <SubmitButton
        onClick={() => {
          if (checked && !hasClicked) {
            setHasClicked(true);
            setOnAnswerSubmit(question.id, index);
            setTimeout(() => {
              setHasClicked(false);
              onGoToNextQuestion(question.id);
            }, 1000);
          }
        }}
      >
        Submit
      </SubmitButton>
    </div>
  );
};

const Header3 = styled.h3`
  padding-top: 150px;
  text-align: center;
  margin: 50px auto;
  color: #638270;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 35px;
    padding: 150px 15px 0 15px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 50px;
    padding: 150px 150px 0 150px;
  }
`;

const LabelContainer = styled.div`
  display: grid;
  grid-template-columns: 0px auto auto;
  padding-top: 10px;

  margin: 10px;
  color: #638270;
`;

const RadioInput = styled.input`
  background-color: green;
`;

const SubmitButton = styled.button`
  display: flex;
  margin: 30px auto 0;
  padding: 8px 20px;
  font-weight: 700;
  color: #638270;
  background-color: #000;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #638270;
  border-right: 2px solid #638270;
  cursor: pointer;
  letter-spacing: 2px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
    margin: 60px auto 0;
  }
  @media (min-width: 1025px) {
    font-size: 30px;

    &:hover {
      border-top: 2px solid #638270;
      border-left: 2px solid #638270;
    }
  }
`;
