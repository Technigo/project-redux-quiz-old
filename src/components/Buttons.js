import React from "react";
import { useDispatch } from "react-redux";
import { NextButton, NextBtnWrapper } from "styles";
import { quiz } from "reducers/quiz";

const Buttons = ({ label, disabled }) => {
  const dispatch = useDispatch();

  return (
    <NextBtnWrapper>
      <NextButton
        type="button"
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
        disabled={disabled}
      >
        {label}
        <img width={40} src="./images/arrow.png" alt="arrow" />
      </NextButton>
    </NextBtnWrapper>
  );
};

export default Buttons;
