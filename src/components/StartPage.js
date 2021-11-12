import React from "react";
import styled from "styled-components";
import { CurrentQuestion } from "./CurrentQuestion";

const StartContainer = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StartPage = () => {
  let play = false;

  const playOn = () => {
    play = true;
  };

  return (
    <StartContainer>
      <Overlay>
        START <button onClick={() => playOn()}>PLAY</button>
      </Overlay>
    </StartContainer>
  );
};
