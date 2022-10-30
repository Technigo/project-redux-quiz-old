import styled from 'styled-components';

export const OptionButton = styled.button`
  width: 450px;
  color: black;
  border-radius: 10px;
  border: 2px solid #b2e2e0;
  padding: 30px;
  font-weight: 700;
  transition: all 0.2s;
  margin-top: 10px;
  ${(props) => props.isCorrect && 'background-color: #67b467; color: white;'};
  ${(props) => props.isIncorrect && 'background-color: #b96f6f; color: white;'};
  ${(props) => props.selected && 'animation: tada; animation-duration: 2s;'};

  &:hover:enabled {
    background-color: #b2e2e0;
    color: white;
  }

  @media (max-width: 667px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  min-width: 150px;
  min-height: 50px;
  border-radius: 15px;
  background-color: rgba(0, 94, 37, 0.25);
  color: #373232;
  border: none;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;

  &:hover:enabled {
    background-color: rgb(255 255 255 / 25%);
    color: white;
  }
`;

export const CorrectAnswerMessage = styled.p`
  ${(props) => props.rightAnswer && 'color: #709f70;'};
  ${(props) => props.wrongAnswer && 'color: red;'};
`;
