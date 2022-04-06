import React from "react";
import { useDispatch } from "react-redux";
import { NextButton, BtnText, NextBtnWrapper } from "styles";
// import arrow from 'images/arrow.png'

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
        <BtnText>{label}</BtnText>
        <img width={40} src="./images/arrow.png" alt="arrow" />
      </NextButton>
    </NextBtnWrapper>
  );
};

export default Buttons;
