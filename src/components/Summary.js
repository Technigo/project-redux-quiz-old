import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import './Summary.css';

export const Summary = () => {
  const CheckAnswers = useSelector(
    (store) =>
      store.quiz.answers.filter((answer) => answer.isCorrect === true).length
  );

  const answer = useSelector((store) => store.quiz.answers);

  // This is the total score that will be shown in the summary
  const score = useSelector((store) => store.quiz.score);

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <section className="summary">
      <h2>YOU COMPLETED THE QUIZ!</h2>

      <h3>Question summary</h3>
      {/* mapping over all answers and displaying the question and correct answer */}
      {answer.map((answers) => (
        <div className="summary-data" key={answers.question.questionText}>
          <p>
            <span className="bold">{`#${answers.questionId} `}</span>
            {`${answers.question.questionText} `}
            <br />
            <span className="bold">{`Correct answer: ${answers.question.correctAnswerName}`}</span>
          </p>
          {/* showing if you answered wright or wrong */}
          {answers.isCorrect && (
            <p className="underline">
              You were right! &nbsp;
              <span className="answer-emoji" role="img" aria-label="correct">
                ✔️
              </span>
            </p>
          )}
          {!answers.isCorrect && (
            <p className="underline">
              You were wrong! &nbsp;
              <span className="answer-emoji" role="img" aria-label="wrong">
                ✖️
              </span>
            </p>
          )}
        </div>
      ))}
      <h4>{`You scored ${CheckAnswers} correct answers out of 5 and hopefullt you learned a bit more about women in tech history.`}</h4>
      {/* Display the total score (defined in line 17) */}
      <p>Your score: {score}</p>
      <button className="restart-button" onClick={restart}>
        Restart quiz
      </button>
    </section>
  );
};
