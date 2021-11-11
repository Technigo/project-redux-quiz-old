import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import Button from "components/smallComponents/Button";

export const FifthQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <div className="question-container">
      <h1 className="question">
        Question {question.id}: {question.questionText}
      </h1>
      <div className="radio-buttons-container">
        {question.options.map((item, index) => (
          <div className="radio-buttons-label" key={item}>
            <input className="radio-button"
              name="radio"
              type="radio"
              id={item}
              value={item}
              onChange={() => {
                onAnswerSubmit(question.id, index);
              }}
            />
            <label className="label-overlay" htmlFor={item}>{item}</label>
            </div>
        ))}
      </div>
      <Button/>
    </div>
  );
};
