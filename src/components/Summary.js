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
  // console.log(answer);

  return (
    <>
      {quizOver && (
        <section className="summary">
          <img src={image} alt="Chirstmas tree" className="summary__image" />
          <p>
            You scored:
            {answer.length} / {questionArray.length}
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
