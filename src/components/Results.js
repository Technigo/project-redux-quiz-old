import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "reducers/quiz";

import {
  Background,
  FlexDiv,
  RightAnswerWrapper,
  RightAnswer,
  ResultHeading,
  RestartButton
} from "styles";

export const Results = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const questionsLength = useSelector((state) => state.quiz.questions.length);

  const handleQuizRestart = () => {
    dispatch(quiz.actions.restart());
  };

  const filterCorrectAnswers = answers.filter((item) => item.isCorrect);

  return (
    <Background>
      <ResultHeading>You got {filterCorrectAnswers.length}/{questionsLength} answers correct!</ResultHeading>
      <FlexDiv>
        {answers.map((answer) => (
          <RightAnswerWrapper key={answer.question.id}>
            <h3>Correct Answer: {answer.question.options[answer.question.correctAnswerIndex]}</h3>
            <RightAnswer>Your Answer: {answer.answer}
              {answer.isCorrect
                ? <span role="img" aria-label="trophy icon"> 🏆</span>
                : <span role="img" aria-label="cross icon"> ❌</span>}
            </RightAnswer>
            <p>Fun Fact: {answer.question.funFact}</p>
          </RightAnswerWrapper>
        ))}
      </FlexDiv>
      <RestartButton onClick={handleQuizRestart}>Restart</RestartButton>
    </Background>
  );
};
