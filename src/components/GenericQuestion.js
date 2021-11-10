import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const GenericQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const toNextQ = () => {
    dispatch(quiz.actions.goToNextQuestion());
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
                toNextQ();
              }}
            />
            {item}
          </label>
        ))}
      </>
    </div>
  );
};
