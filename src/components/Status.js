import React from 'react';
import { useSelector } from 'react-redux';

// import { quiz } from '../reducers/quiz';

export const Status = () => {
    const questionId = useSelector((state) => state.quiz.currentQuestionIndex);
    // const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
    const questionsArray = useSelector((state) => state.quiz.questions);

    return (
        <div>
            <h1 className="question">
                Question {questionId + 1}/{questionsArray.length}
            </h1>
        </div>
    );
};
