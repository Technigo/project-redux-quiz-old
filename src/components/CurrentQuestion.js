import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Summary } from "components/Summary";

export const CurrentQuestion = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);

  const questions = useSelector((state) => state.quiz.questions);

  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => question.id === answer.questionId)
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (!quizOver) {
    return (
      <div className="question-container">
        <h2>
          {questionIndex + 1}/{questions.length}
        </h2>
        <h1>{question.questionText}</h1>
        {question.options.map((option, index) => {
          return (
            <button
              className={
                answer && index === question.correctAnswerIndex
                  ? "correct-answer option-button"
                  : answer && index === answer.answerIndex
                  ? "option-button incorrect-answer"
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
        <button
          onClick={() => dispatch(quiz.actions.goToNextQuestion())}
          disabled={!answer}
          className="next-button"
        >
          Next
        </button>
      </div>
    );
  }
  return <Summary />;
};
