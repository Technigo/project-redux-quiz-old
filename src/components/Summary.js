/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Link } from 'react-router-dom';
import './Summary.css';

export const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers); // asking store to give us answers from quiz object
  const questionArray = useSelector((state) => state.quiz.questions);
  const correctAnswer = useSelector((state) => state.quiz.answers.filter((a) => a.isCorrect)); //filtering out correct answers

  return (
    <main className="summary-container">
      <div className="summary">
        <h1>Summary</h1>
        {answers.map((answer) => (
          <div className="summary-text" key={answer.question.questionText}>
            <p>
              {answer.question.questionText}
            </p>
            <p className="your-answer">
              <span> Your answer: {answer.answer}</span>
              {answer.isCorrect ? " ✔" : " ✖"}
            </p>
            <p className="correct-ans">
              {!answer.isCorrect ? "Correct answer: " + answer.question.options[answer.question.correctAnswerIndex] : ""}
            </p>
          </div>
        ))}
          <p className="correct-answers">
            You answered {`${correctAnswer.length}`}/{questionArray.length} questions correct
          </p>
      </div> 
      <div>
      <Link onClick={() => dispatch(quiz.actions.restart())} to="/">
        <button className="restart-button">RESTART QUIZ!</button>
      </Link>   
      </div>
    </main>
  );
};

            
            
