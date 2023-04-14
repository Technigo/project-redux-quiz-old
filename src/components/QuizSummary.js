import React from 'react';
import { useSelector } from 'react-redux';

export const QuizSummary = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.answers);

  if (!questions || !answers) {
    return null;
  }

  const correctAnswers = questions.reduce((total, answer) => {
    if (answer.isCorrect) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div>
      <h2>Quiz Summary</h2>
      {answers.map((answer) => (
        <div className="summary" key={answer.quetionId}>
          <h3>{answer.question.questionText}</h3>
          <p>Selected answer: {answer.answer ? answer.answer : 'Not answered'}</p>
          <p>Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
        </div>
      ))}
      <p>Total Correct Answers: {correctAnswers}</p>
      <p>Total Questions: {questions.length}</p>
      <p>Percentage: {Math.round((correctAnswers / questions.length) * 100)}%</p>
    </div>
  );
};
