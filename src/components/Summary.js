import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from "../components/Loader"

import { quiz } from '../reducers/quiz';

export const Summary = () => {
  const dispatch = useDispatch()

  // asking store to give us anwers from quiz object
  const answers = useSelector((state) => state.quiz.answers)

  const loading = useSelector((state) => state.quiz.loading)
  console.log(loading)



  // created this function to take restart function from the store
  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }

  /* for every correct answer, the score gets rised */
  answers.forEach((item) => {
    if (item.isCorrect) {
      dispatch(quiz.actions.riseScore())
    }
  })

  const score = useSelector((state) => state.quiz.score)

  return (
    <div>
	  {/*{loading && <Loader />}*/}
      <h2>Summary</h2>
      <p>Score: {score}/{answers.length}</p>
      <button
        type="submit"
        onClick={() => restartQuiz()}>Restart the quiz
      </button>
    </div>
  );
};
