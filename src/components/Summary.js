import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const Summary = () => {
    const answersCorrect = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length)
    const dispatch = useDispatch()
    const restart = () => {
        dispatch(quiz.actions.restart())
    }

    return (
        <>
            <h1>Here goes our summary</h1>
            <button type="button" onClick={restart}>Play again!</button>
        </>
    )
}