import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const NextQuestionButton = ({ onNextQuestion, answers, currentQuestionIndex }) => {

    const quizOver = useSelector((state) => state.quiz.quizOver)
    const questions = useSelector((state) => state.quiz.questions)


    if (!quizOver && currentQuestionIndex + 1 === questions.length) {
        return (
            <Link to="/summary">
                <button>Would you like to submit?</button>
            </Link>
        )
    }
    return (
        <button type="button" disabled={!answers[currentQuestionIndex]} onClick={onNextQuestion}>Next question</button>)
}

export default NextQuestionButton