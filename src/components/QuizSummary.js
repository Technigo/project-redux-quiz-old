import React from 'react';
import { useSelector } from 'react-redux';

export const QuizSummary = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.answers);
  console.log('questions:', questions);
  console.log('answers:', answers);
  if (!questions || !answers) {
    return null;
  }

  const correctAnswers = answers.reduce((total, answer) => {
    if (answer.isCorrect) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div>
      <h2>Quiz Summary</h2>
      <div className="summary">
        <p>Total Correct Answers: {correctAnswers}</p>
        <p>Percentage: {Math.round((correctAnswers / questions.length) * 100)}%</p>
        <p>Total Questions: {questions.length}</p>
      </div>
      <h3>Questions and Answers</h3>
      {answers.map((answer) => (
        <div className="summary" key={answer.questionId}>
          <h4>{answer.question.questionText}</h4>
          <p>Your answer: {answer.answer ? answer.answer : 'Not answered'}</p>
          <p>Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
        </div>
      ))}
    </div>
  );
};
