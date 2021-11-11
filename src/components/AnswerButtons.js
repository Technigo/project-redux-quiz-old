import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

const QuestionButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  height: 150px;
  gap: 15px;
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
  padding: 15px;
  justify-content: center;
  align-items: center;
  color: white;
  height: 60px;
  background-color: black;
  font-weight: bold;

  &:active {
    top: 0.5em;
  }
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
