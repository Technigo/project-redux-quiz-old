import React, { useState } from "react";
import styled from "styled-components";
import { CurrentQuestion } from "./CurrentQuestion";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const StartBtn = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  font-family: "Concert One", cursive;
  border: solid #000 3px;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  width: 10em;
  margin-bottom: 1em;

  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
`;

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.quiz.start);
  const onStartButtonclick = () => {
    dispatch(quiz.actions.startGame());
  };
  return (
    <>
      {!start ? (
        <main>
          <h1>Guess Whose Butt</h1>
          <section className="welcome-section">
            <div className="welcome-wrapper">
              <h2 className="welcome-text">
                Let’s see if you know your animal butts!
              </h2>
              <StartBtn onClick={onStartButtonclick}> Let's play! </StartBtn>
            </div>
          </section>
        </main>
      ) : (
        <CurrentQuestion />
      )}
    </>
  );
};
