import React from 'react';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);

  return (
    <>
      {quizOver && (
        <div>
          <p>Hello!</p>
        </div>
      )}
    </>
  );
};
