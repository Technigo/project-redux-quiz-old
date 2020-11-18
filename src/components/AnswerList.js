import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz.js";

export const AnswerList = () => {
    const dispatch = useDispatch();
    const question = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
    );
    const answers = question.options;

    const id = question.id;

    const handleClick = (index) => {
        dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    };

    return (
        <>
            {answers.map((answer, index) => (
                <button type="button" onClick={() => handleClick(index)}>
                    {answer}
                </button>
            ))}
        </>
    );
};
