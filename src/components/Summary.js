import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quiz } from 'reducers/quiz';

import './Summary.css';

export const Summary = () => {
  const CheckAnswers = useSelector(
    (store) =>
      store.quiz.answers.filter((answer) => answer.isCorrect === true).length
  );

  const questions = useSelector((store) => store.quiz.answers);

  // DENNA FILTRERAR UT ENDAST FEL SVAR
  // const questions = useSelector((store) =>
  //   store.quiz.answers.filter((answer) => answer.isCorrect === false)
  // );
  // console.log('QUESTION', question);

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <section className="summary">
      <h2>YOU COMPLETED THE QUIZ!</h2>

      <h3>Question summary</h3>

      {questions.map((questions) => (
        <div>
          <p key={questions.questionId}>
            <span className="bold">{`#${questions.questionId} `}</span>
            {`${questions.question.questionText} `}
          </p>
          <p>{`Correct answer: ${questions.answer}`}</p>
          {questions.isCorrect && (
            <span role="img" aria-label="correct">
              ✔️
            </span>
          )}
          {!questions.isCorrect && (
            <span role="img" aria-label="wrong">
              ✖️
            </span>
          )}
        </div>
      ))}
      <p>{`You scored ${CheckAnswers} correct answers out of 5 and hopefullt you learned a bit more about women in tech history.`}</p>

      <button className="restart-button" onClick={restart}>
        Restart quiz
      </button>
    </section>
  );
};
