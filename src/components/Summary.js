import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const answer = useSelector((state) =>
    state.quiz.answers.filter((a) => a.isCorrect)
  );

  const questionArray = useSelector((state) => state.quiz.questions);

  let image;

  switch (answer.length) {
    case 5:
      image = './assets/basket-ball-tree.jpg';
      break;
    case 0:
      image = './assets/sad-tree.jpg';
      break;
    default:
      image = './assets/santa-tree.jpg';
  }

  let quizScore = 0;

  const calculateQuizScore = (score, quizLength) => {
    quizScore = (score - (quizLength - score)) * 100
    console.log(quizScore);
    return quizScore;
  }
  calculateQuizScore(answer.length, questionArray.length);

  return (
    <>
      {quizOver && (
        <section className="summary">
          <img src={image} alt="Christmas tree" className="summary__image" />
          <p className="summary__text">
            You answered
            {` ${answer.length}`} out of {questionArray.length} questions correct.
          </p>

          <p className="summary__text">
            Your total points are: {quizScore}
          </p>

          <button
            className="summary__restart--button"
            type="button"
            onClick={() => dispatch(quiz.actions.restart())}>
            Restart
          </button>
        </section>
      )}
    </>
  );
};
