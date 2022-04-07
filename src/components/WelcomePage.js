import React from 'react'
import styled from 'styled-components'
import { CurrentQuestion } from './CurrentQuestion'
import { useSelector, useDispatch } from 'react-redux'
import "./QuestionPage.css";
import { quiz } from 'reducers/quiz'
import Button from './Button'


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
          <section className="question-section">
            <div className="question-container welcome-wrapper ">
              <h2 className="welcome-text"> 
               How to play?
              </h2>
              <p> Correct butt: +2 points </p>
              <p>Incorrect butt: -1 point </p>
              <p>Gameover: under 0 point</p>
            </div>
              <Button onClick={onStartButtonclick}> Let's play! </Button>
          </section>
        </main>
      ) : (
        <CurrentQuestion />
      )}
    </>
  );
};
