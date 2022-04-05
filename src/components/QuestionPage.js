import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";

const AnswerSubmitBtn = styled.button`
  &:active {
    background: ${(props) => props.background};
  }
`;

const QuestionPage = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const answerArray = useSelector((state) => state.quiz.answers);
  console.log("answerArray", answer);

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };
  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  //setTimeout(displayNextQuestion, 2000);

  //Check the answer state - correct or incorrect

  return (
    <section className="question-section">
      <h1>Guess Whose Butt</h1>
      <div className="question-container">
        <img
          className="question-img"
          src={question.img}
          alt={question.img_atl}
        />
        <div className="answer-btn-container">
          {question.options.map((item, index) => (
            <AnswerSubmitBtn
              type="submit"
              onClick={() => onAnswerSubmit(question.id, index)}
              background={answer?.isCorrect ? "blue" : "red"}
              key={item}
            >
              {item}
            </AnswerSubmitBtn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionPage;
