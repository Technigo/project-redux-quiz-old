import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export const CheckQuestion = () => {
  const answer = useSelector(
    (store) =>
      store.quiz.answers.find((a) => a.questionId === a.currentQuestionIndex) // 👈 this selector fetches the answer to a question (found it in the brief! maybe good for when you do the CheckQuestion function?)
  );

  const dispatch = useDispatch();

  if (answer) {
    return <h1>Right answer</h1>;
  }

  console.log('ANSWER: ', answer);
};

/* 
When the user selects an answer, it should show if they were correct or not.  */

/*
1. Kolla state på svaret
2. If svaret === true
3. if(correctAnswerIndex === selectedAnswer) {
	<div>Correct!</>
} else <div>Incorrect!</>
4. 

 */
