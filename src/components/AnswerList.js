import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz.js";

export const AnswerList = ({ handleNextClick }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [wasSelected, setWasSelected] = useState(false);

    const onNextBtnClick = () => {
        handleNextClick()
        setSelectedAnswer(-1)
        setWasSelected(false)
    }

    const dispatch = useDispatch();
    const question = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
    );
    const answers = question.options;
    const id = question.id;
    const handleClick = (index) => {
        setSelectedAnswer(index);
        setWasSelected(true);
        dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    };
    return (
        <>
            {answers.map((answer, index) => {
                if (wasSelected) {
                    if (index === question.correctAnswerIndex) {
                        return (
                            <button
                                disabled
                                className="button-options green"
                                type="button"
                                onClick={() => handleClick(index)}>
                                {answer}
                            </button>
                        )
                    } else {
                        return (
                            <button
                                disabled
                                className="button-options red"
                                type="button"
                                onClick={() => handleClick(index)}>
                                {answer}
                            </button>
                        )
                    }
                } else {
                    return (
                        <button
                            disabled={wasSelected}
                            className="button-options"
                            type="button"
                            onClick={() => handleClick(index)}>
                            {answer}
                        </button>
                    )
                }
            })}
            {wasSelected && <div className="right-wrong">{selectedAnswer === question.correctAnswerIndex ? "A true Friends fan!" : "Oopsie, not correct!"}</div>}
            <button disabled={!wasSelected} className="button-next" type="button" onClick={onNextBtnClick}>
                Next
      </button>
        </>
    );
};





