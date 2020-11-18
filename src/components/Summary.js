import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

const SummaryContainer = styled.section`
    
`


export const Summary = () => {
    const dispatch = useDispatch();

    const restartQuiz = () => {
        dispatch(quiz.actions.restart())
    };

 return (
    <div>
        <h2>Correct answers:</h2>
        <p>{answers.length}</p>

        <p>{answers[0].question}</p>
        <div>
        {answers.map((answer) => (
            <div>
            <p>{answer.questionId}. {question}</p>
            <p>{answer}</p>
            <p>{isCorrect}</p>
            </div>
        ))}
        </div>
        
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
 );
};
