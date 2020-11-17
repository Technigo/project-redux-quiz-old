import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => question.id === answer.questionId)
  );
  console.log(answer);
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return (
          <button
            className={
              answer &&
              answer.isCorrect &&
              index === question.correctAnswerIndex
                ? "correct-answer option-button"
                : "option-button"
            }
            key={option}
            onClick={() =>
              dispatch(
                quiz.actions.submitAnswer({
                  questionId: question.id,
                  answerIndex: index,
                })
              )
            }
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

// (className =
//   question.correctAnswerIndex === index
//     ? "correct-answer option-button"
//     : "option-button")
