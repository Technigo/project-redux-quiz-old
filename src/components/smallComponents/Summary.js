import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../../reducers/quiz";
import "components/questions/Questions.css";
import styled from "styled-components";

const SummaryPage = styled.div`
  margin-top: 100px;
`;

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);

  const dispatch = useDispatch();

  const finalAnswers = answers
    .reduceRight((previousResult, val) => {
      if (previousResult.find((v) => v.questionId === val.questionId)) {
        return previousResult;
      } else {
        previousResult.push(val);
        return previousResult;
      }
    }, [])
    .reverse();

  const anotherTry = () => {
    dispatch(quiz.actions.restart());
  };

  const correctAnswersAmount = useMemo(() => {
    return answers.filter((answer) => answer.isCorrect).length;
  }, [answers]);

  return (
    <SummaryPage>
      <div className="question-container">
        <h1 className="summery">Summary</h1>
        <h2 className="answers">
          {`You got ${correctAnswersAmount} out of 5 correct!`}
        </h2>

        {finalAnswers.map((item) => (
          <div key={item.questionId}>
            <h3 className="question-heading">
              {`Question ${item.questionId} is ${
                item.isCorrect ? "correct" : "wrong"
              }`}
            </h3>
            <p className="question-small">{`You guessed: ${item.answer}`}</p>

            <p className="question-small">
              {`The correct one is:
                ${item.question.options[item.question.correctAnswerIndex]}`}
            </p>
          </div>
        ))}
        <button className="submit-button" type="submit" onClick={anotherTry}>
          Try Again
        </button>
      </div>
    </SummaryPage>
  );
};
