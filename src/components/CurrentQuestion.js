import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  // @ida getting data from the store / "postnord"
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  // const answer = useSelector(
  //   (state) => state.quiz.answers.find((a) => (a.questionId === question.id))
  // )

  // @ida simply to add a console.log
  const store = useSelector((state) => state);
  console.log(store, 'store');

  // @ida forwarding data from the store / updating the store / "DHL"
  const dispatch = useDispatch();
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    if (question.correctAnswerIndex === index) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      alert('Wrong answer, pls try again!');
    }
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => {
        return (
          <button
            type="button"
            key={item}
            onClick={() => onAnswerSubmit(question.id, index)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
