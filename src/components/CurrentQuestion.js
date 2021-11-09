import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Summary } from 'components/Summary'

export const CurrentQuestion = () => {
  /* useSelector is another hook, useSelector takes one argument,with this you can excess
  different slices in store, if we had more slices we could see it in the console;
  when writing store.quiz, you are more specific, you are execing only this slice */
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  /* in order to show summary.js we need to ask store to get uppdated value,
  that why using useSelector */
  const isQuizOver = useSelector((state) => state.quiz.quizOver)

  /* const questionIsTrue = useSelector((state) => state.quiz.answers.isCorrect) */

  /* dispatch all of the actions, dispatch some actions,
  that call reducers and reducers update the store, store detect that it was updated,
  calls selectors, selectors come to componenets with information -
  please refresh yourself and then lifecycle ends */
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // if isQuizOver is true, we return Summary component
  if (isQuizOver) {
    return <Summary />
  }

  const onSubmitAnswer = (id, index) => {
    // what exact function we need to call to uppdate the store
    dispatch(
      quiz.actions.submitAnswer({ questionId: id, answerIndex: index })
    );
    // first dispatch is to call submitAnswer, and another one is to call goToNextQuestion function
    // because we want to go to the next question directly
    dispatch(
      quiz.actions.goToNextQuestion({ id })
    );
  };

  return (
    <div>
      <p> {question.id} / 5 </p>
      <h1> {question.questionText} </h1>
      {question.options.map((item, index) => (
        <button
          type="button"
          key={item}
          /* pass function to the dispatch to update the state, exessing
 quiz object: quiz.actions.submitAnwer(), then we need to pass argument to our submit function
         answerId is a specific answer of a question */
          onClick={() => onSubmitAnswer(question.id, index)}>
          {item}
        </button>
      ))}
    </div>
  );
};
