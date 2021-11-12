import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import "./Questions.css";
import Button from "components/smallComponents/Button";

const semlaImg =
  "https://st2.depositphotos.com/31984086/46224/v/600/depositphotos_462241918-stock-illustration-semla-is-a-traditional-sweet.jpg";

export const FourthQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const Dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    Dispatch(
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
      <img className="food-image" src={semlaImg} alt="semla" />
      <select
        disabled={answer}
        className="question-select"
        onChange={(event) =>
          onAnswerSubmit(question.id, parseInt(event.target.value))
        }
      >
        {question.options.map((option, index) => (
          <option key={option} value={index}>
            {option}
          </option>
        ))}
      </select>
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
