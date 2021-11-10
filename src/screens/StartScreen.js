import React from "react";
import styled from "styled-components";

export const StartScreen = ({ onStartButtonClick }) => {
  return (
    <Wrapper>
      <ImageContainer />
      <MainContainer>
        <TextButtonContainer>
          <HeaderText>Harry Potter</HeaderText>
          <Subtitle> Are you a muggle or a wizard?</Subtitle>

          <StartButton
            onClick={() => {
              onStartButtonClick(true);
            }}
          >
            Take the quiz
          </StartButton>
        </TextButtonContainer>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

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
  height: 100%;
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
  border-left: 2px solid #638270;
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
    margin-top: 2px;
    font-size: 30px;

    &:hover {
      border-top: 2px solid #638270;
      border-right: 2px solid #638270;
      margin-top: 0px;
    }
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
