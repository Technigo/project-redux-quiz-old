import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #b2e2e0;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.alignTop ? 'flex-top' : 'center')};
  align-items: center;
  min-height: 100vh;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 500px;
  min-height: 500px;
  border-radius: 10px;
  box-shadow: 10px 10px #87afad;

  @media (max-width: 667px) {
    width: 300px;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  margin-bottom: 2em;
  padding: 10px;
  align-items: center;
`;

export const StartEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: center;
  max-width: 80%;

  h1 {
    font-size: 50px;
  }
`;

export const BottomPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
