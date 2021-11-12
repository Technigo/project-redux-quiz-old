import React, { useState } from "react";
import styled from "styled-components";

// A function that controls the radiobuttons and their functionality.
export const RadioButtonsQuestion = ({
  question,
  setOnAnswerSubmit,
  onGoToNextQuestion,
}) => {
  const [hasClicked, setHasClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(false);

  return (
    <ContainerRadiobuttonsSubmitButton>
      <Header3>{question.questionText}</Header3>
      {question.options.map((item, index) => {
        return (
          <Wrapper key={item}>
            <Item>
              <RadioInput
                id={`RadioButtonOption-${index}`}
                type="radio"
                onChange={(e) => {
                  setChecked(true);
                  setIndex(index);
                }}
                name="checked"
                required="required"
              />
              <LabelContainer></LabelContainer>
              <label
                style={{ color: "white" }}
                htmlFor={`RadioButtonOption-${index}`}
              >
                {item}
              </label>
            </Item>
          </Wrapper>
        );
      })}

      {/* if the radiobutton is checked and the user has not clicked the submit button we update states with information
      about the chosen option and send the user to the next question. */}
      <SubmitButton
        onClick={() => {
          if (checked && !hasClicked) {
            setHasClicked(true);
            setOnAnswerSubmit(question.id, index);
            onGoToNextQuestion(question.id);
            setHasClicked(false);
          }
        }}
      >
        Submit
      </SubmitButton>
    </ContainerRadiobuttonsSubmitButton>
  );
};

// -------------------------- Styled component ---------------------------------

const ContainerRadiobuttonsSubmitButton = styled.div`
  height: 100%auto;
  display: grid;
  grid-template-rows: 1fr auto auto auto auto 1fr;
`;

const Header3 = styled.h3`
  padding-top: 15px;
  text-align: center;
  grid-template-rows: 1fr;
  color: #638270;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 35px;
    padding: 15px 15px 0 15px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 50px;
    padding: 0 200px 0 200px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

const SubmitButton = styled.button`
  display: flex;
  margin: auto;
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
    margin: auto;
  }

  @media (min-width: 1025px) {
    font-size: 30px;
    &:hover {
      border-top: 2px solid #638270;
      border-left: 2px solid #638270;
    }
  }
`;
