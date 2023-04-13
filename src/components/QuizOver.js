/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

export const QuizOver = () => {
  const answers = useSelector((state) => state.quiz.answers)

  return (
    <div>
      <p> You answered {answers.filter((a) => a.isCorrect).length} out of {answers.length} questions correctly.</p>
    </div>
  )
}