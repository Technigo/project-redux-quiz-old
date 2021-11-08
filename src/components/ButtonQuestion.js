import React from "react";

import styled from "styled-components";

export const ButtonQuestion = ({ question, setOnAnswerSubmit }) => {
  console.log(question);

  return (
    <QuestionContainer>
      <Header2>{question.questionText}</Header2>
      <ImageContainer>
        <Image src="./pictures/hogwarts-express.jpg"></Image>
      </ImageContainer>

      <ButtonsContainer>
        {question.options.map((item, index) => (
          <div key={item}>
            <Button onClick={() => setOnAnswerSubmit(question.id, index)}>
              {item}
            </Button>
          </div>
        ))}
      </ButtonsContainer>
    </QuestionContainer>
  );
};

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  border: black 1px solid;
`;

const QuestionContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto auto;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;

  column-gap: 10px;
`;

const Button = styled.button`
  background-color: black;
  color: #b87333;
  font-weight: 700;
  width: 100%;
  padding: 10px;
`;

const Header2 = styled.h2`
  margin: 0 0 10px 0;
`;
