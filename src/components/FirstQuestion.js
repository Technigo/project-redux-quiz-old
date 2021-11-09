/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const FirstQuestion = () => {
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

    const dispatch = useDispatch()

    if (!question) {
        return <h1>Oh no! I could not find the current question!</h1>
    }

    const onAnswerSubmit = (id, index) => {
        dispatch(
            quiz.actions.submitAnswer({
                questionId: id,
                answerIndex: index
            })
        )
    }

    return (
        <div>
            <h1>Question: {question.questionText}</h1>
            {question.options.map((item, index) => (
                <div key={item}>
                    <input
                        type="radio"
                        id="options"
                        name="answer"
                        onChange={() => onAnswerSubmit(question.id, index)} />
                    <label htmlFor="options">{item}</label>
                </div>
            ))}
        </div>
    )
}