import React from 'react';
import { useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const Summary = () => {

    const answers = useSelector((state) => state.quiz.answers)
	const answerCorrect = answers.filter(item => item.isCorrect)

    return (
        <>
        <p>Points count: {answerCorrect.length}/{answers.length}</p>
        </>
    )
}

