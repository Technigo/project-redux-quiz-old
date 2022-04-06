import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import SubmittedView from "./SubmittedView";

import Buttons from "./Buttons";

const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const isAnswered = currentQuestionIndex + 1 === answers.length;
  const readyToSubmit = questions.length - 1 === currentQuestionIndex;
  const isSubmitted = useSelector((state) => state.quiz.quizOver);

  const onAnswerSubmit = (index) =>
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }));

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (isSubmitted) {
    return <SubmittedView />;
  }

  return (
    <div>
      <h2>{question.questionText}</h2>
      <img width={200} src={question.image} alt={question.questionText} />
      {question.options.map((option, index) => {
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onAnswerSubmit(index);
            }}
          >
            {option.label}
          </button>
        );
      })}
      <Buttons
        label={readyToSubmit ? "Submit" : "Next"}
        disabled={currentQuestionIndex === answers.length}
      />
      <p>
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
      {isAnswered && <p>{answers[currentQuestionIndex].isCorrect ? "correct" : "incorrect"}</p>}
    </div>
  );
};
export default CurrentQuestion;
