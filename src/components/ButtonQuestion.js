import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const ButtonQuestion = ({ question, setOnAnswerSubmit }) => {
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
                <CorrectButton
                  onClick={() => {
                    setOnAnswerSubmit(question.id, index);
                  }}
                >
                  {item}
                </CorrectButton>
              </div>
            );
          } else if (
            answer &&
            answer.answerIndex === index &&
            !answer.isCorrect
          ) {
            return (
              <div key={item}>
                <NotCorrectButton
                  onClick={() => {
                    setOnAnswerSubmit(question.id, index);
                  }}
                >
                  {item}
                </NotCorrectButton>
              </div>
            );
          } else {
            return (
              <div key={item}>
                <Button
                  onClick={() => {
                    setOnAnswerSubmit(question.id, index);
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
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto auto;
  flex-direction: column;
  align-items: center;
  background-color: black;
  background-image: url(${require(`../pictures/smoke.jpg`)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ButtonsContainer = styled.div`
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
    font-size: 40px;
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
`;

const Header3 = styled.h3`
  text-align: center;
  margin: 0 0 10px 0;
  color: #638270;
`;
