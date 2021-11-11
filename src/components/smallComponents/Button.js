import React, { useEffect } from "react";
import "./Button.css";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "reducers/quiz";
import { useCountDown } from "./useCountdown";

const Button = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const [countdown] = useCountDown(30);

  const answer = useSelector((state) => state.quiz.answers);

  const dispatch = useDispatch();

  const toNextQ = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  useEffect(() => {
    if (countdown <= 0) {
      dispatch(quiz.actions.goToNextQuestion());
    }
  }, [countdown, dispatch]);

  const answered = answer.find((a) => a.questionId === question.id);

  return (
    <div className="submit-button-container">
      <span className="countdown">Time left: {countdown} sec</span>
      <button
        className="submit-button"
        disabled={!answered}
        type="submit"
        onClick={toNextQ}
      >
        {question.id === 5 ? "See Score" : "Next"}
      </button>
    </div>
  );
};

export default Button;
