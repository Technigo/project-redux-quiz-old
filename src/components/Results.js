import React from 'react';
import { useSelector } from 'react-redux';

const Results = (props) => {
  const { score } = props;
  const quizOver = useSelector((store) => store.quiz.quizOver);
  console.log(quizOver)

  return (
    <h2>Your score was {score}</h2>
  )
}

export default Results;