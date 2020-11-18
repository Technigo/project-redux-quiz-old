import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import { Summary } from "./Summary";
import styled from "styled-components";

const QuestionContainer = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e40010;
  justify-content: center;
  align-items: center;
`;

const QuestionHeader = styled.legend`
  max-width: 450px;
  padding: 25px;
  font-size: 32px;
  color: #00b32c;
`;

const RadioWrapper= styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.label`
  max-width: 400px;
  padding: 15px;
  font-size: 24px; 
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  flex-direction: column;
`;

const AnswerStyle = styled.div`
  max-width: 100%;
`

const RightAnswerStyle = styled.div`
  max-width: 100%;
  margin-bottom: 30px;
`

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

  const allAnswers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const submitAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer) === question.correctAnswerIndex) {
      return <h2>Du svarade rätt!</h2>;
    } else {
      return <h2>Fel svar tyvärr.</h2>;
    }
  }

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
          <RadioWrapper>
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
          </RadioWrapper>
        ))}
        <ButtonWrapper>
        {answer === undefined &&
          <HolidayButton
            disabled={userAnswer === ""}
            onClick={() => submitAnswer(question.id, userAnswer)}
          >
            Submit
          </HolidayButton>
          }
          {answer !== undefined &&
            <>
              <AnswerStyle>{checkAnswer()}</AnswerStyle>
              <RightAnswerStyle>Rätt svar är {answer.answer}!</RightAnswerStyle>
              <HolidayButton disabled={answer === undefined} onClick={nextQuestion}>
                {question.id < 7 ? "Next question" : "Show result"}
              </HolidayButton>
            </>
          }
        </ButtonWrapper>
      </QuestionContainer>
    );
  }
};

export default CurrentQuestion;
