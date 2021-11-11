import React from "react";
import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import foodie from 'assets/foodie.jpg'
import styled from "styled-components"

const LandingPage = styled.div`
margin-top: 100px;
`;

export const EntryPage = () => {
  const dispatch = useDispatch();
  const toNextQ = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };
  return (
    <>
      <LandingPage>
        <div className="question-container">
        <h1 className="question">Are you a foodie? Test your knowledge!</h1>
        <img src={foodie} alt="foodie" className="food-image"/>
      <button className="submit-button" type="submit" onClick={toNextQ}>
        Start the quiz
        </button>
        </div>
      </LandingPage>
    </>
  );
};
