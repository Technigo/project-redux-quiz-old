import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

import { ButtonContainer, SpanBorder } from "components_styled/StyledElements";
import { Button } from "components_styled/StyledElements";
import { Title } from "components_styled/StyledElements";

export const CurrentQuestion = ({ setQuizDone }) => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const dispatch = useDispatch();
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );

  const quizOver = useSelector((store) => store.quiz.quizOver);

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setHasAnswered(true);
  };

  const handleNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setHasAnswered(false);
  };

  if (quizOver) {
    setQuizDone(true);
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <Title>Question: {question.questionText}</Title>
        <ButtonContainer>
        <SpanBorder></SpanBorder>
          {question.options.map((item, index) => {
            return (
                <Button onClick={() => onAnswerSubmit(question.id, index)} key={item}>
                  {item}
                </Button>
            );
          })}
          {hasAnswered && <button onClick={handleNextButton}>Next</button>}
        </ButtonContainer>
    </>
  );
};
