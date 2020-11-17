import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);

  // const questions = useSelector((state) => state.quiz.questions);
  // const answers = useSelector((state) => state.quiz.answers);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      {!quizOver && (
        <div>
          <h1>Question: {question.questionText}</h1>
          {question.options.map((option) => (
            <button type="button">{option}</button>
          ))}
          <button
            type="button"
            onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            Next Question
          </button>
          {/* <p>
     {questions.length - answers.length}/{questions.length}
   </p>
   <p>{questions.length - answers.length} questions left</p> */}
        </div>
      )}
    </>
  );
};
