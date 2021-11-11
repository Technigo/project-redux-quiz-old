import React from 'react';
import { useSelector } from 'react-redux';
import NextStepButton from '../components/NextStepButton';

import { CurrentQuestion } from 'components/CurrentQuestion';

import Progressbar from '../components/Progressbar';
import Header from 'components/Header';

const Questions = () => {
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const usersAnswer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  );

  document.getElementById('html').className = question.category.toLowerCase();

  return (
    <>
      <Header />
      <div className='question-container'>
        <CurrentQuestion question={question} usersAnswer={usersAnswer} />
        <NextStepButton usersAnswer={usersAnswer} />
        <Progressbar
          numberOfQuestions={numberOfQuestions}
          question={question}
        />
      </div>
    </>
  );
};

export default Questions;
