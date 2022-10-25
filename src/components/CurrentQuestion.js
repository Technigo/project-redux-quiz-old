import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const { question, quizOver } = useSelector((state) => ({
    question: state.quiz.questions[state.quiz.currentQuestionIndex],
    quizOver: state.quiz.quizOver
  }));

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      // window.alert('Sorry, Wrong answer');
    }
  };

  if (quizOver) {
    return (
      <div>
        <h1>Quiz Over</h1>
        <button
          type="button"
          onClick={() => {
            dispatch(quiz.actions.restart());
          }}
        >
          restart
        </button>
      </div>
    );
  }

  // /* Page Component */
  // if (quizOver) {
  //   return <EndScreen />
  // } else {
  //   return <CurrentQuestion />
  // }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return (
          <button
            onClick={() => onAnswerSubmit(question.id, index)}
            type="button"
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
