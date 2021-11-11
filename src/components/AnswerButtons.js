import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

const QuestionButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  height: 150px;
  gap: 15px;
  justify-content: center;
`;

const QuestionButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: pink;
  width: 130px;
  padding: 20px;
  justify-content: center;
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
      <QuestionButtonWrapper>
        {question.options.map((item, index) => (
          <div key={item}>
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
          </div>
        ))}
      </QuestionButtonWrapper>
    </>
  );
};

export default AnswerButtons;
