import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// styled components for the start page

const StartPageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(12, 1fr);
  justify-content: center;
  place-items: center;
  background-color: rgb(245, 245, 245);
`;

const StartButton = styled.button`
  grid-column: 3;
  grid-row: 6;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: transparent;
  border: none;
  margin-top: 20px;
`;

const StartButtonText = styled.div`
  height: 55px;
  width: 150px;
  background-color: rgb(236, 227, 227);
  color: rgb(61, 61, 61);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 20px;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
    inset 4px 4px 6px rgba(0, 0, 0, 0.2);
  color: yellow;
  text-shadow: 0 0 2px rgb(78, 77, 77), 0 0 15px yellow, 0 0 25px yellow;
  animation: glow 1.5s linear infinite;
  cursor: pointer;
`;
const Ul = styled.ul`
  grid-column: 3;
  grid-row: 5;
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const Li = styled.li`
  list-style: none;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 50px;
  width: 50px;
  z-index: 100;
`;

const StartPage = () => {
  const history = useHistory();

  return (
    <StartPageContainer>
      <Ul>
        <Li>
          <Checkbox />
          <div className="startText">Q</div>
        </Li>
        <Li>
          <input type="checkbox" />
          <div className="startText">U</div>
        </Li>
        <Li>
          <input type="checkbox" />
          <div className="startText">I</div>
        </Li>
        <Li>
          <input type="checkbox" />
          <div className="startText">Z</div>
        </Li>
      </Ul>

      <StartButton type="button" onClick={() => history.push("/game")}>
        <StartButtonText>START</StartButtonText>
      </StartButton>
    </StartPageContainer>
  );
};

export default StartPage;
