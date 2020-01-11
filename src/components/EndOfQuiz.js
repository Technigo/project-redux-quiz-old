/* eslint-disable arrow-parens */
import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentQuestion } from './CurrentQuestion';
import { Summary } from './Summary';
import { Header } from './Header';

export const EndOfQuiz = () => {
  const quizOver = useSelector(state => state.quiz.quizOver);

  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <div>
          {!quizOver && <CurrentQuestion />}
          {quizOver && <Summary />}
        </div>
      </div>
    </>
  );
};
