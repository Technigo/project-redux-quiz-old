/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { quiz } from '../reducers/quiz';
import { ProgressStatus } from './ProgressStatus';
import { Audio } from '../components/Audio';
import { Summary } from './Summary';

import './ProgressStatus.css';
import './currentQuestion.css';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector((state) => state.quiz.answers.find((a) => (
    a.questionId === question.id
  )));

  //We ask store to get updated value (true or false) of isQuizOver
  const isQuizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  };

  // if isQuizOver is true, then Summary component is returned
  if (isQuizOver) {
    return <Summary />;
  };

  // collects the specific id and answer for each question on submit
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <>		
    <main className="current-question-main">
    <div className="question-section">
      <h1>Question</h1>
      <h3>{question.questionText}</h3>
      {question.id === 1 && <Audio></Audio>}
      <div className="btn-section">
      {question.options.map((item, index) => (
        <button 
          className={!answer ? "defaultbtn" : index === question.correctAnswerIndex ? "correct" : "wrong"} 
          key={item}
          type="button"
          disabled={answer}
          onClick={() => onAnswerSubmit(question.id, index)}>
          {item}
        </button>
      ))}
      </div>
    <div>
      <button 
        className="next-question-button"
        type="button"
        disabled={!answer}
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
      >
        Next Question
      </button>
    </div>
    <ProgressStatus />
    </div> 
    </main>
    </>
  );
};

