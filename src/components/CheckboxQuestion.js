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

  console.log(checked);
  console.log(question);

  return (
    <div>
      <Header3>{question.questionText}</Header3>
      {question.options.map((item, index) => {
        return (
          <Wrapper>
            <Item>
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
              <LabelContainer key={item}>
                <label htmlFor="checkboxOption" />
                <span style={{ textAlign: "right" }}>{item}</span>
              </LabelContainer>
            </Item>
          </Wrapper>
        );
      })}
      <SubmitButton
        onClick={() => {
          if (checked && !hasClicked) {
            setHasClicked(true);
            setOnAnswerSubmit(question.id, index);
            console.log("SetAnswer");
            setTimeout(() => {
              console.log("Onwards");
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

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const LabelContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: lightgrey;
  border: 1px solid gray;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

const RadioInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;

  &:hover ~ ${LabelContainer} {
    background: darkgray;
    /* &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 0 6px;
      padding: 0;
      background: lightgrey;
    } */
  }
  &:checked + ${LabelContainer} {
    background: #638270;
    border: 1px solid darkgray;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      /* margin: 6px; */
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

const SubmitButton = styled.button`
  display: flex;
  margin: 10% auto 0;
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
