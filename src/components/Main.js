import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { CurrentQuestion } from "components/CurrentQuestion";
import { Summary } from "components/Summary";
import { ProgressBar } from "./ProgressBar";
import { quiz } from "../reducers/quiz";

export const Main = () => {
  const [startButtonClick, setStartButtonClick] = useState(false);
  const isQuizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();

  const onRestart = () => {
    console.log("hej", quiz);
    setStartButtonClick(false);
    dispatch(quiz.actions.restart());
  };

  if (isQuizOver) {
    return (
      <SummaryContainer>
        <ProgressBar />
        <QuizHeader>Quiz Summary</QuizHeader>
        <Summary />
        <RestartButtonContainer>
          <RestartButton onClick={onRestart}>Restart</RestartButton>
        </RestartButtonContainer>
      </SummaryContainer>
    );
  }

  if (!startButtonClick) {
    return (
      <>
        <ImageContainer />
        <MainContainer>
          <TextButtonContainer>
            <HeaderText>Harry Potter</HeaderText>
            <Subtitle> Are you a muggle or a wizard?</Subtitle>

            <StartButton
              onClick={() => {
                setStartButtonClick(true);
              }}
            >
              Take the quiz
            </StartButton>
          </TextButtonContainer>
        </MainContainer>
      </>
    );
  }
  if (startButtonClick) {
    return (
      <QuestionsSection>
        <ProgressBar />
        <CurrentQuestion />
      </QuestionsSection>
    );
  }
};

const ImageContainer = styled.section`
  position: relative;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  opacity: 0.9;
  background-image: url(${require(`../pictures/firstpage-picture.jpg`)});
  z-index: -1;
  position: absolute;
`;

const MainContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextButtonContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 40px 0;

  @media (min-width: 668px) and (max-width: 1024px) {
    grid-template-rows: 1fr auto auto;
    margin: 0;
  }
  @media only screen and (min-width: 1025px) {
    grid-template-rows: 1fr auto auto;
    margin: 0;
  }
`;

const HeaderText = styled.h1`
  color: black;
  font-size: 80px;
  text-align: center;
  margin: 0;
  font-family: Harry;
  text-shadow: -1px -1px 0 #638270, 1px -1px 0 #638270, -1px 1px 0 #638270,
    1px 1px 0 #638270;
  letter-spacing: 1px;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 150px;
    margin-top: 80px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 200px;
    margin-top: 60px;
  }
`;

const StartButton = styled.button`
  padding: 8px 20px;
  font-weight: 900;
  color: #638270;
  background-color: black;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #638270;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 2px;
  @media (min-width: 668px) and (max-width: 1024px) {
    margin-bottom: 40px;
    font-size: 25px;
  }
  @media only screen and (min-width: 1025px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const Subtitle = styled.h3`
  margin: 10px 0;
  text-align: center;
  font-size: 19px;
  letter-spacing: 1px;
  color: black;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 40px;
  }
`;

const QuizHeader = styled.h2`
  text-align: center;
  margin: 0;
  padding-top: 10px;
`;

const SummaryContainer = styled.section`
  height: 100%;
  background-color: black;
  background-image: url(${require(`../pictures/smoke.jpg`)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  color: #638270;

  @media (min-width: 668px) and (max-width: 1024px) {
    padding: 20px 100px 20px 100px;
    height: 100vh;
  }
  @media only screen and (min-width: 1025px) {
    height: 100vh;
    font-size: 40px;
    padding: 20px 100px 20px 100px;
  }
`;

const RestartButton = styled.button`
  padding: 8px 20px;
  font-weight: 900;
  color: #638270;
  background-color: black;
  border: none;
  border-radius: 2px;
  border-bottom: 2px solid #638270;
  border-left: 2px solid #638270;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 2px;
  @media (min-width: 668px) and (max-width: 1024px) {
    margin-bottom: 40px;
    font-size: 25px;
  }
  @media only screen and (min-width: 1025px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const RestartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const QuestionsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
  background-image: url(${require(`../pictures/smoke.jpg`)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
