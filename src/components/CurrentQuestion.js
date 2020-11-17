import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return (
          <button
            className="option-button"
            onClick={() =>
              dispatch(
                quiz.actions.submitAnswer({
                  questionId: question.id,
                  answerIndex: index,
                })
              )
            }
            key={option}
          >
            {option}
          </button>
        );
      })}
      <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
        Next
      </button>
    </div>
  );
};
