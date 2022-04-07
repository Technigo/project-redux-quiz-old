import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Main, StartCard, Correct, Incorrect, StartBtn, Results } from "styles";

const SubmittedView = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((question) => question.isCorrect).length;
  const dispatch = useDispatch();

  return (
    <Main>
      <StartCard>
        <h2>Let's see how you did</h2>
        {answers.map((question, index) => {
          return (
            <p key={index}>
              {question.question.material} belongs in {question.answer.value}:{" "}
              {question.isCorrect ? (
                <Correct>Correct</Correct>
              ) : (
                <Incorrect> Incorrect </Incorrect>
              )}
            </p>
          );
        })}
        <Results>
          You got {correctAnswers} of {answers.length} questions correct!
        </Results>
        <StartBtn type="button" onClick={() => dispatch(quiz.actions.restart())}>
          Try again
        </StartBtn>
      </StartCard>
    </Main>
  );
};

export default SubmittedView;
