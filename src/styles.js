import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: rgb(55, 120, 44);
    font-family: 'Spartan', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 37px;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    h1 {font-size: 60px;
      line-height: 78px;
    }
  }

`;

export const Main = styled.main`
  display: flex;
  min-width: 375px;
  max-width: 700px;
  margin: 0 auto;
  height: auto;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: #fcf3d1;
  flex-direction: column;
  border: solid;
  border-radius: 10px;
  width: 100%;
  margin: 3vh;
  min-height: 85vh;
`;

export const StartCard = styled(Card)`
  padding: 2vw 5vw 0 5vw;
`;

export const StartText = styled.p`
  font-size: 16px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const QuestionNumber = styled.p`
  background-color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 700;
  color: beige;
  padding: 10px;
  margin: 0;
  border-radius: 5px 5px 0 0;
`;

export const Question = styled.h2`
  margin: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const QuestionMaterial = styled(Question)`
  font-weight: 700;
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 0;
`;

export const Image = styled.img`
  border: solid 1px;
  border-radius: 10px;
  align-self: center;
  margin-bottom: 10px;
  width: 200px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const OptionBtn = styled.button`
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  width: 70%;
  align-self: center;
  color: black;
  background: transparent;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px;
  margin-top: 8px;

  &:disabled {
    opacity: 0.4;
  }
`;

export const NextBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  bottom: 8%;
  color: black;
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  color: black;
  background: transparent;
  border: none;
  border-radius: 10px;
  padding: 5px;

  &:disabled {
    opacity: 0.4;
  }
`;

export const AnswerWrapper = styled.div`
  display: flex;
  height: 24px;
  justify-content: center;
`;

export const Answers = styled.p`
  margin: 10px 0;
  line-height: 20px;
`;

export const StartBtn = styled.button`
  color: white;
  background-color: black;
  font-family: inherit;
  font-weight: 600;
  border: 2px solid black;
  border-radius: 10px;
  margin: 40px 60px;
  padding: 12px;
  font-size: 18px;
`;

export const Results = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

export const Correct = styled.span`
  font-weight: bold;
  color: rgb(55, 120, 44);
`;
export const Incorrect = styled.span`
  font-weight: bold;
  color: red;
`;
