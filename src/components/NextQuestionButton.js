import React from 'react';
import { useDispatch } from 'react-redux';

import { quiz } from 'reducers/quiz';

export const NextQuestionButton = () => {
  const dispatch = useDispatch();

    if ({quiz.questions.quizOver === true}) {
       return (
       <button type="button" onClick={}>
            See summary
        </button> 
        )} else {
        return(
        <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Next Question
        </button>
        )
    };  
};


