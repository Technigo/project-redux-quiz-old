import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Summary } from "./Summary";
import { ProgBar } from "./ProgressBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;

  @media ${devices.tablet} {
    width: 768px;
  }
`;

const Main = styled.section`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Question = styled.h1`
  font-size: 20px;
  text-align: center;
`;

const Button = styled.button`
  font-family: poppins;
  color: black;
  background-color: white;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  border: none;
  margin: 10px;
  width: 70%;
  height: 70px;

  &:hover {
    color: orange;
  }

  border: solid 3px ${(props) => props.border};

  @media ${devices.tablet} {
    height: 50px;
  }
`;

export const CurrentQuestion = () => {
  // Getting data from the store
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const store = useSelector((state) => state);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const answersArray = useSelector((state) => state.quiz.answers);
  console.log(store);

  const dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setTimeout(displayNextQuestion, 1700);
  };

  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (!question) {
    return <div>Oh no! I could not find the current question!</div>;
  }

  //If-statement to change colors on button borders if right/wrong answers

  const changeBorderColor = (indexOption) => {
    if (answersArray.length === currentQuestionIndex) {
      return "none";
    } else {
      if (question.correctAnswerIndex === indexOption) {
        return "greenyellow";
      }
      return "red";
    }
  };

  return (
    <Wrapper>
      <Main>
        <Header />

        {quizOver ? (
          <Summary />
        ) : (
          <QuestionContainer>
            <Question>Question: {question.questionText}</Question>
            {question.options.map((item, index) => (
              <Button
                onClick={() => onAnswerSubmit(question.id, index)}
                key={item}
                border={changeBorderColor(index)}
                disabled={answersArray.length === question.id}
              >
                {item}
              </Button>
            ))}
          </QuestionContainer>
        )}

        <ProgBar />
        {/* <Timer /> */}
        <Footer />
      </Main>
    </Wrapper>
  );
};
