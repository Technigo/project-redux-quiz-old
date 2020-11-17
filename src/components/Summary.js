import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const Summary = () => {
    const dispatch = useDispatch();

    const restartQuiz = () => {
        dispatch(quiz.actions.restart())
    };

 return (
    <div>
        <h1>Hello summary!</h1>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
 );
};
