import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const PictureQuestion = ({
  question,
  setOnAnswerSubmit,
  onGoToNextQuestion,
}) => {
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => question.id === answer.questionId)
  );

  return (
    <QuestionContainer>
      <Header3>{question.questionText}</Header3>
      <ButtonsContainer>
        {question.options.map((option, index) => {
          if (answer && answer.answerIndex === index && answer.isCorrect) {
            return (
              <div key={option.name}>
                <CorrectOptionImage imgSrc={option.imgSrc}>
                  {option.name}
                </CorrectOptionImage>
              </div>
            );
          } else if (
            answer &&
            answer.answerIndex === index &&
            !answer.isCorrect
          ) {
            return (
              <div key={option.name}>
                <WrongOptionImage imgSrc={option.imgSrc}>
                  {option.name}
                </WrongOptionImage>
              </div>
            );
          } else {
            return (
              <OptionImage
                key={option.name}
                imgSrc={option.imgSrc}
                onClick={() => {
                  setOnAnswerSubmit(question.id, index);

                  setTimeout(() => {
                    onGoToNextQuestion(question.id);
                  }, 1000);
                }}
              >
                {option.name}
              </OptionImage>
            );
          }
        })}
      </ButtonsContainer>
    </QuestionContainer>
  );
};

const OptionImage = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url(${(props) => props.imgSrc});
  background-size: cover;
  color: #638270;
  text-align: center;
  font-size: 20px;
  border-radius: 2px;
  border-bottom: 2px solid #638270;
  border-right: 2px solid #638270;
  cursor: pointer;
  padding: 10px 0;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 215px;
    height: 200px;
  }
  @media only screen and (min-width: 1025px) {
    width: 215px;
    height: 200px;
  }

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
      url(${(props) => props.imgSrc});
    background-size: cover;
  }
`;

const WrongOptionImage = styled(OptionImage)`
  border-color: #460000;
  color: #460000;
  background-color: black;
  background-image: none;

  &:hover {
    background-color: black;
    background-image: none;
  }
`;

const CorrectOptionImage = styled(OptionImage)`
  background-image: none;
  background-color: #638270;
  color: black;

  &:hover {
    background-color: #638270;
    background-image: none;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-template-rows: 1fr auto auto;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  width: 80%;
  justify-content: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    width: 60%;
  }
`;

const Header3 = styled.h3`
  padding-top: 15px;
  text-align: center;
  margin: 10px;
  color: #638270;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 35px;
    padding: 150px 15px 150px 15px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 50px;
    padding: 15px 150px 150px 150px;
  }
`;
