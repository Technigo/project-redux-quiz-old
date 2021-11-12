import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { quiz } from "reducers/quiz";

const QuestionButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 5px;
  padding: 10px;
  width: 100%;
  height: 120px;
  gap: 5px;
  justify-content: center;

  @media (min-width: 768px) {
    height: 100px;
    align-items: center;
  }
`;

const QuestionButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  width: 130px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  color: white;
  height: 45px;
  background-color: black;
  font-weight: bold;
  cursor: pointer;

  &:active {
    top: 0.5em;
  }
`;

const AnswerButtons = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const dispatch = useDispatch();

  const onSubmitAnswer = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: id,
        answerIndex: index,
      })
    );
  };

  return (
    <>
      <QuestionButtonWrapper>
        {question.options.map((item, index) => (
          <div key={item}>
            <QuestionButton
              onClick={() => onSubmitAnswer(question.id, index)}
              disabled={answers}
              style={{
                borderColor: !answers
                  ? "white"
                  : question.correctAnswerIndex === index
                  ? "lightgreen"
                  : "#800000",

                color: !answers
                  ? "white"
                  : question.correctAnswerIndex === index
                  ? "lightgreen"
                  : "#800000",
              }}
            >
              {item}
            </QuestionButton>
          </div>
        ))}
      </QuestionButtonWrapper>
    </>
  );
};

export default AnswerButtons;
