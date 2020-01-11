/* eslint-disable arrow-parens */
import React from 'react';
import { useSelector } from 'react-redux';
import { Options } from './Options';
import { NextButtonContainer } from './NextButtonContainer';
import './CurrentQuestion.css';
import { Counter } from './Counter';

export const CurrentQuestion = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuesionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <section>
        <div>
          <div className="questions">
            <h2 className="questionText">{question.questionText}</h2>
          </div>
          <Options />
          <NextButtonContainer />
          <Counter />
        </div>
      </section>
    </>
  );
};
