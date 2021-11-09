/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'

export const FirstQuestion = () => {
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
    console.log(question)

    if (!question) {
        return <h1>Oh no! I could not find the current question!</h1>
    }

    return (
        <div>
            <h1>Question: {question.questionText}</h1>
            {question.options.map((item) => (
                <div>
                    <input type="checkbox" id="options" />
                    <label key={item} htmlFor="options">{item}</label>
                </div>
            ))}
        </div>
    )
}