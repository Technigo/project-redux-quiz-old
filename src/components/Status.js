import React from "react";
import { useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";

export const Status = () => {
    const question = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
    );
    const questionsArray = useSelector((state) => state.quiz.questions);

    return (
        <div>
            <h1 className="question">
                Question {question.id}/{questionsArray.length}
            </h1>
        </div>
    );
};
