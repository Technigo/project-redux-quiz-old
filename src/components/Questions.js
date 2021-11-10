import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const Questions = () => {
  return (
    <>
      <h1>{question.questionText}</h1>
      <img src={question.img} alt="coverImage" />
    </>
  );
};

export default Questions;
