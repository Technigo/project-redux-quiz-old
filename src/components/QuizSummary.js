import React from 'react';
import { useSelector } from 'react-redux';

export const QuizSummary = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.answers);

  if (!questions || !answers) {
    return null;
  }

  const correctAnswers = questions.reduce((total, question) => {
    if (answers[question.id] === question.correctAnswerIndex) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div>
      <h2>Quiz Summary</h2>
      {questions.map((question) => (
        <div className="summary" key={question.id}>
          <h3>{question.questionText}</h3>
          <p>Selected answer: {answers[question.id] !== undefined ? question.options[answers[question.id]] : 'Not answered'}</p>
          <p>Correct answer: {question.options[question.correctAnswerIndex]}</p>
        </div>
      ))}
      <p>Total Correct Answers: {correctAnswers}</p>
      <p>Total Questions: {questions.length}</p>
      <p>Percentage: {Math.round((correctAnswers / questions.length) * 100)}%</p>
    </div>
  );
};
