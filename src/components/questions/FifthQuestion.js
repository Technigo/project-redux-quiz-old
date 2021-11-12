import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import Button from "components/smallComponents/Button";

const borchImg =
  "https://images.unsplash.com/photo-1527976746453-f363eac4d889?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2232&q=80";

export const FifthQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <div className="question-container">
      <h1 className="question">
        Question {question.id}: {question.questionText}
      </h1>
      <div className="food-image">
        <img className="food-image" src={borchImg} alt="Borch" />
      </div>
      <div className="radio-buttons-container">
        {question.options.map((item, index) => (
          <div className="radio-buttons-label" key={item}>
            <input
              className="radio-button"
              name="radio"
              type="radio"
              id={item}
              value={item}
              disabled={answer}
              onChange={() => {
                onAnswerSubmit(question.id, index);
              }}
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
