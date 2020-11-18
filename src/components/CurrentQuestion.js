import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import { Summary } from "./Summary";
import styled from "styled-components";

const QuestionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e40010;
  justify-content: center;
  align-items: center;
`;

const QuestionHeader = styled.legend`
  width: 450px;
  padding: 25px;
  font-size: 32px;
  color: #00b32c;
`;

const QuestionText = styled.label`
  width: 400px;
  padding: 15px;
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin: 30px;
`;

const HolidayButton = styled.button`
  width: 100px;
  height: 100px;
  color: #fffff:
  margin: 20px;
  background-color: #0B5E15; 
  border-radius: 10px;
`;

const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const [userAnswer, setUserAnswer] = useState("");
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );

  console.log("userAnswer: " + userAnswer);
  console.log("answer: " + JSON.stringify(answer));

  const allAnswers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const submitAnswer = (id, index) => {
    if (parseInt(userAnswer) === question.correctAnswerIndex) {
      console.log("Rätt svar");
    } else {
      console.log("Fel svar");
    }
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setUserAnswer("");
  };

  const options = question.options;

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  } else if (quizOver === true) {
    return <Summary />;
  } else {
    return (
      <QuestionContainer>
        <h1>{question.id}/7</h1>
        <QuestionHeader>{question.questionText}</QuestionHeader>
        {options.map((option, index) => (
          <QuestionText htmlFor={index} key={index}>
            <input
              id={index}
              type="radio"
              name="answer"
              value={index}
              onChange={(event) => setUserAnswer(parseInt(event.target.value))}
              checked={userAnswer === index}
            />
            {option}
          </QuestionText>
        ))}
        <ButtonWrapper>
          <HolidayButton
            disabled={userAnswer === ""}
            onClick={() => submitAnswer(question.id, userAnswer)}
          >
            Submit
          </HolidayButton>
          <HolidayButton disabled={answer === undefined} onClick={nextQuestion}>
            {question.id < 7 ? "Next question" : "Show result"}
          </HolidayButton>
        </ButtonWrapper>
      </QuestionContainer>
    );
  }
};

export default CurrentQuestion;
