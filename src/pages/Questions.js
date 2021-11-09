import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from 'components/CurrentQuestion';

import Progressbar from '../components/Progressbar';

const Questions = () => {
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  return (
    <>
      <CurrentQuestion
        numberOfQuestions={numberOfQuestions}
        question={question}
      />
      <Progressbar numberOfQuestions={numberOfQuestions} question={question} />
    </>
  );
};

export default Questions;
