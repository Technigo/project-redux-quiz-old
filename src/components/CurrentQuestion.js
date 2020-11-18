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
`

const QuestionHeader = styled.legend`
  max-width: 450px;
  padding: 25px;
  font-size: 32px;
  color: #000;
  text-align: center;
`

const RadioWrapper= styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
`

const OptionsText = styled.label`
  max-width: 400px;
  padding: 15px;
  font-size: 24px; 
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  flex-direction: column;
`

const AnswerStyle = styled.div`
  max-width: 100%;
`

const RightAnswerStyle = styled.div`
  max-width: 100%;
  margin-bottom: 30px;
`

const HolidayButton = styled.button`
  padding: 10px;
  color: #fff;
  margin: 20px;
  background-color: #0B5E15; 
  border-radius: 10px;
`


const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const quizOver = useSelector((state) => state.quiz.quizOver);
  const [userAnswer, setUserAnswer] = useState("");
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );

  // const allAnswers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const submitAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer) === question.correctAnswerIndex) {
      return <h2>YAY! Correct answer!</h2>;
    } else {
      return <h2>Sorry, you chose the wrong answer.</h2>;
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
        <h1>Christmas quiz</h1> 
        <h2>{question.id}/7</h2>
        <QuestionHeader>{question.questionText}</QuestionHeader>
        {options.map((option, index) => (
          <RadioWrapper>
            <OptionsText htmlFor={index} key={index}>
              <input
                id={index}
                type="radio"
                name="answer"
                value={index}
                onChange={(event) => setUserAnswer(parseInt(event.target.value))}
                checked={userAnswer === index}
              />
              {option}
            </OptionsText>
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
              <RightAnswerStyle>The correct answer is {answer.answer}!</RightAnswerStyle>
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
