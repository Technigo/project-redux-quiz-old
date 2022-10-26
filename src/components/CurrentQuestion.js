import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const questions = useSelector(
    (state) => state.quiz.questions.length[state.quiz.questions]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('Sorry, Wrong answer');
    }
  };

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

      <p>
        Question {question.id}/{questions}
      </p>
    </div>
  );
};
