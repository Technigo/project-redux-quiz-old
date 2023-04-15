import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { quiz } from '../reducers/quiz';

export const QuizSummary = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Button onClick={restartQuiz}>Play again
      </Button>
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
