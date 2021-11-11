import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { useHistory } from "react-router-dom";

const SiteContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aquamarine;
  color: black;
`;

const Main = styled.main`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  display: flex;
  color: palevioletred;
`;

const Button = styled.button`
  font-size: 0.5em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &: hover {
    box-shadow: 5px 5px rgb(69, 69, 69);
    color: red;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: flex;
  animation: ${rotate} 2s linear;
  padding: 2rem 1rem;
  font-size: 3.5rem;
  flex-direction: column;
`;

const StartPage = () => {
  const history = useHistory();

  return (
    <>
      <SiteContainerDiv>
        <Main>
          <Rotate>
            Hello friends
            <Button type="button" onClick={() => history.push("/game")}>
              Start
            </Button>
          </Rotate>
        </Main>
      </SiteContainerDiv>
    </>
  );
};

export default StartPage;
