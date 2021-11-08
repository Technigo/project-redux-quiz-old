import React from "react";

const NextQuestionButton = ({ onNextQuestion, answers, currentQuestionIndex }) => {

    return (
        <button type="button" disabled={!answers[currentQuestionIndex]} onClick={onNextQuestion}>Next question</button>
    )
}

export default NextQuestionButton