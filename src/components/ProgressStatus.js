import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const ProgressStatus = () => {
    const questionCurrent = useSelector((state) => state.quiz.currentQuestionIndex + 1)
    const questionLast = useSelector((state) => state.quiz.questions.length)

    return (
        <div className="progress-text">
            <p>
                Question: {questionCurrent} out of {questionLast}.
            </p>
        </div>
    )
}