import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

const SiteContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aquamarine;
  color: black;
`;

const Main = styled.main`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3.5em;
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

const StartPage = () => {
  const history = useHistory();

  return (
    <>
      <SiteContainerDiv>
        <Main>
          Hello friends
          <Button type="button" onClick={() => history.push("/game")}>
            Start
          </Button>
        </Main>
      </SiteContainerDiv>
    </>
  );
};

export default StartPage;
