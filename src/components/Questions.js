import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

const Questions = () => {
  return (
    <>
      <QuestionText>{question.questionText}</QuestionText>
      <img src={question.img} alt="cover" />
    </>
  );
};

export default Questions;
