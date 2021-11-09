import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const ButtonQuestion = ({
  question,
  setOnAnswerSubmit,
  onGoToNextQuestion,
}) => {
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => question.id === answer.questionId)
  );

  console.log(answer);
  console.log(question);

  return (
    <QuestionContainer>
      <Header3>{question.questionText}</Header3>

      <ButtonsContainer>
        {question.options.map((item, index) => {
          if (answer && answer.answerIndex === index && answer.isCorrect) {
            return (
              <div key={item}>
                <CorrectButton>{item}</CorrectButton>
              </div>
            );
          } else if (
            answer &&
            answer.answerIndex === index &&
            !answer.isCorrect
          ) {
            return (
              <div key={item}>
                <NotCorrectButton>{item}</NotCorrectButton>
              </div>
            );
          } else {
            return (
              <div key={item}>
                <Button
                  onClick={() => {
                    setOnAnswerSubmit(question.id, index);
                    console.log("SetAnswer");
                    setTimeout(() => {
                      console.log("Onwards");
                      onGoToNextQuestion(question.id);
                    }, 1000);
                  }}
                >
                  {item}
                </Button>
              </div>
            );
          }
        })}
      </ButtonsContainer>
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-template-rows: 1fr auto auto;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  width: 80%;
  justify-content: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
  @media (min-width: 668px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media only screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    font-size: 40px;
    margin: 0 200px;
  }
`;

const Button = styled.button`
  padding: 8px 20px;
  height: 100%;
  width: 100%;
  font-weight: 900;
  color: #638270;
  background-color: black;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #638270;
  border-right: 2px solid #638270;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: 2px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 30px;

    &:hover {
      transition: all 200ms ease-in-out;
      border-top: 2px solid #638270;
      border-left: 2px solid #638270;
    }
  }
`;
const CorrectButton = styled.button`
  padding: 8px 20px;
  height: 100%;
  width: 100%;
  font-weight: 900;
  color: black;
  background-color: #638270;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: 2px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 30px;
  }
`;

const NotCorrectButton = styled.button`
  padding: 8px 20px;
  height: 100%;
  width: 100%;
  font-weight: 900;
  color: #7d0000;
  background-color: black;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #460000;
  border-right: 2px solid #460000;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: 2px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 30px;
  }
`;

const Header3 = styled.h3`
  padding-top: 150px;
  text-align: center;
  margin: 0 0 10px 0;
  color: #638270;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 35px;
    padding: 150px 15px 0 15px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 50px;
    padding: 150px 150px 0 150px;
  }
`;
