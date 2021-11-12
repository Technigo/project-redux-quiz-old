/* eslint-disable react/jsx-indent-props */ /* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from "react";
import "./Questions.css";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import moussaka from "assets/moussaka-image.jpg";
import Button from "../smallComponents/Button";

export const FirstQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: id,
        answerIndex: index,
      })
    );
  };

  return (
    <div className="question-container">
      <h1 className="question">
        Question {question.id}: {question.questionText}
      </h1>
      <div className="food-image">
        <img className="food-image" src={moussaka} alt="moussaka" />
      </div>
      <div className="radio-buttons-container">
        {question.options.map((item, index) => (
          <div className="radio-buttons-label" key={item}>
            <input
              className="radio-button"
              type="radio"
              id={item}
              name="answer"
              value={item}
              onChange={() => onAnswerSubmit(question.id, index)}
            />
            <label className="label-overlay" htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </div>
      <Button />
    </div>
  );
};
