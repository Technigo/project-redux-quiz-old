import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { Link } from 'react-router-dom'

const RestartQuiz = () => {

    const dispatch = useDispatch()
    const onRestartClick = () => {
        dispatch(quiz.actions.restart())
    }

    return (
        <Link to='/'>
            <button onClick={onRestartClick}>Restart the quiz</button>
        </Link>
    )
}

export default RestartQuiz