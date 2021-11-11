import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

const QuestionButtonWrapper = styled.div`
  display: flex;

  justify-content: center;
  padding: 10px;
  width: 100%;
`;

const QuestionButton = styled.button`
  border-radius: 20px;
  background-color: pink;
  width: 47%;
  padding: 20px;
`;

const AnswerButtons = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = useSelector((state) =>
    state.quiz.answers.find(
      (a) => a.questionId === question.id // question could come from the previous selector in the last example
    )
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
      {question.options.map((item, index) => (
        <QuestionButtonWrapper key={item}>
          <QuestionButton
            onClick={() => onSubmitAnswer(question.id, index)}
            style={{
              background: !answers
                ? "white"
                : question.correctAnswerIndex === index
                ? "green"
                : "red",
            }}
          >
            {item}
          </QuestionButton>
        </QuestionButtonWrapper>
      ))}
    </>
  );
};

export default AnswerButtons;
