import React from 'react'
import { useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const Summary = () => {
  // asking store to give us anwers from quiz object
  const answers = useSelector((state) => state.quiz.answers)

  return (
    <div>
      {answers.map((item) => (
        console.log(item)
      ))}
    </div>
  );
};
