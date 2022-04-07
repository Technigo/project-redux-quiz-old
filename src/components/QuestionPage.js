import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import "./QuestionPage.css";
import styled, { keyframes } from "styled-components";

// const zoomInZoomOut = keyframes`
// 0% {
//   transform: scale(1, 1);
// }
// 50% {
//   transform: scale(1.1, 1.1);
// }
// 100% {
//   transform: scale(1, 1);
// }
// `

const AnswerSubmitBtn = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  font-family: "Concert One", cursive;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 10em;
  margin-bottom: 1em;
  border: solid ${(props) => props.border} 5px;
 
  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
`;




const QuestionPage = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  console.log("question", question);
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );
  console.log("answer", answer);

  const answerArray = useSelector((state) => state.quiz.answers);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  console.log(answerArray);

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setTimeout(displayNextQuestion, 1500);
  };

  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  //Check the answer state - correct or incorrect
  const changeColorBtn = (indexOption) => {
    if (!answer) {
      return "#000";
    } else {
      if (question.correctAnswerIndex === indexOption) {
        return "#66FF00";
      }
      return "red";
    }
  };

  return (
    <>
    <h1>Guess Whose Butt</h1>
    <section className="question-section">
      <div className="question-container">
        <div className="question-img-container">
          <img
            className="question-img"
            src={question.img}
            alt={question.img_alt}
          />
        </div>
        <div className="answer-btn-container">
          {question.options.map((item, index) => (
            <AnswerSubmitBtn
              disabled={answer}
              type="submit"
              onClick={() => onAnswerSubmit(question.id, index)}
              key={item}
              border={changeColorBtn(index)}
            >
              {item}
            </AnswerSubmitBtn>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default QuestionPage;
