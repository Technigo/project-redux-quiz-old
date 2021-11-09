import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';

export const ProgBar = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );
  console.log('QUESTION', question);

  return (
    <div>
      <ProgressBar now={question.id} label={`${(question.id / 5) * 100}%`} />
    </div>
  );
};

// this is just a experimental progressbar I played with! it's not imported anywhere yet :)
