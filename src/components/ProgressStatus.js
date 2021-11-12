/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'

import './ProgressStatus.css'

export const ProgressStatus = () => {
    const questionCurrent = useSelector(
        (state) => state.quiz.currentQuestionIndex + 1)
    const questionLast = useSelector(
        (state) => state.quiz.questions.length)

    return (
        <section className="progress-status">
            <label htmlFor="progress">
                Question: {questionCurrent} out of {questionLast}.
            </label>
            <progress
                id="progress"
                value={questionCurrent}
                max={questionLast}>
            </progress>
        </section>
    )
}