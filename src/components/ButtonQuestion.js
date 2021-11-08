import React from "react";

import styled from "styled-components";

export const ButtonQuestion = ({ question, setOnAnswerSubmit }) => {
  console.log(question);

  return (
    <QuestionContainer>
      <ImageContainer>
        <Image src="./pictures/hogwarts-express.jpg"></Image>
      </ImageContainer>

      <ButtonsContainer>
        {question.options.map((item, index) => (
          <div key={item}>
            <button onClick={() => setOnAnswerSubmit(question.id, index)}>
              {item}
            </button>
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
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify content: flex-end;
 
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
