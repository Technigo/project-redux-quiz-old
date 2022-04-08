import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled from "styled-components";
import giphy from "assets/giphy.gif";
import g1vY from "assets/g1vY.gif";
// import Timer from './Timer'

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  font-family: poppins;
  background-color: white;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  border: none;
  margin: 10px;
  width: 70%;
  color: black;

  &:hover {
    color: orange;
    `;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const numOfAnswers = answers.length;

  return (
    <>
      <SummaryWrap>
        {correctAnswers < 3 && (
          <>
            <h2>Maybe you should rewatch the show...</h2>
            <img src={giphy} alt="loser-gif" width="375px" />
          </>
        )}
        {correctAnswers >= 3 && (
          <>
            <h2>You are true a fan, great work!</h2>
            <img src={g1vY} alt="winner-gif" width="375px" />
          </>
        )}

        <p>
          You got {correctAnswers} right anwers out of {numOfAnswers}
        </p>
      </SummaryWrap>

      <ButtonWrapper>
        <Button onClick={() => dispatch(quiz.actions.restart())} tabindex="0">
          Restart Quiz!
        </Button>
      </ButtonWrapper>
    </>
  );
};
