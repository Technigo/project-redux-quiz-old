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
    <div>
      <h1>
        Question {question.id}: {question.questionText}
      </h1>
      <>
        {question.options.map((item, index) => (
          <label htmlFor="radio" key={item}>
            <input
              name="radio"
              type="radio"
              onChange={() => {
                onAnswerSubmit(question.id, index);
              }}
            />
            {item}
          </label>
        ))}
      </>
      <Button/>
    </div>
  );
};
