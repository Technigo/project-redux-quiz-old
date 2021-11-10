import React from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  return (
    <div>
      <progress
        className="progress-bar"
        id="file"
        value={questions[currentQuestionIndex].id}
        max={questions.length}
      />
    </div>
  );
};

export default ProgressBar;
