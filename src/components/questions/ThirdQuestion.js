import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import Button from "components/smallComponents/Button";

const IMAGE_URL_KROPPKAKA =
  "https://img.koket.se/standard-mega/kroppkakor-med-lingon-och-brynt-smor.jpg";

export const ThirdQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <div className="question-container">
      <h1 className="question">
        Question {question.id}: {question.questionText}
      </h1>
      <div className="food-image">
        <img
          className="food-image"
          src={IMAGE_URL_KROPPKAKA}
          alt="kroppkaka"
        ></img>
      </div>
      <div className="radio-buttons-container">
        {question.options.map((item, index) => (
          <div className="radio-buttons-label" key={item}>
            {/* prettier-ignore */}
            <input
                            className="radio-button"
							type="radio"
							id={item}
							name="third-question"
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
