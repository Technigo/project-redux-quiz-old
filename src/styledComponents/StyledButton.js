import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 100px;
  min-height: 30px;
  color: #005e25;
  border-radius: 30px;
  border: 2px solid #b2e2e0;
  padding: 5px;
  font-weight: 700;
  ${(props) => props.isCorrect && 'background-color: #67b467; color: white;'};
  ${(props) => props.isIncorrect && 'background-color: #b96f6f; color: white;'};
  transition: all 0.2s;

  &:hover {
    background-color: #b2e2e0;
    color: white;
  }
  /* &:disabled {
    background-color: rgba(0, 94, 37, 0.25);
    color: rgb(0, 94, 37);
    border: none;
  } */
`;
