import React from 'react';
import { useSelector } from 'react-redux';

export const QuizSummary = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.answers);

  if (!questions || !answers) {
    return null;
  }

  return (
    <div>
      {questions.map((question) => (
        <div className="summary">
          <h2>{question.questionText}</h2>
          <p>Selected answer: {answers[question.id]}</p>
          <p>Correct answer: {question.options[question.correctAnswerIndex]}</p>
        </div>
      ))}
    </div>
  );
}
