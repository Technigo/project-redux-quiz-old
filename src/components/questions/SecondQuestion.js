import React from "react";
import "./Questions.css";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import adobo from "assets/adobo.png";
import Button from "../smallComponents/Button";

export const SecondQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
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
      <div className="adobo-image">
        <img className="food-image" src={adobo} alt="adobo" />
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
              disabled={answer}
              onChange={() => onAnswerSubmit(question.id, index)}
            />
            <label className="label-overlay" htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </div>
      {answer && (
        <h1>
          {" "}
          {answer.isCorrect
            ? "You are correct"
            : "That's wrong! Practice more."}
        </h1>
      )}
      <Button />
    </div>
  );
};
