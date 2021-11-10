import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const PictureQuestion = ({ question }) => {
  return (
    <QuestionContainer>
      <Header3>{question.questionText}</Header3>
      <ButtonsContainer>
        <Header3>{question.imgSrc}</Header3>
        <Header3>{question.options}</Header3>
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
