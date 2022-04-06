import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'



export const RestartButton = () => {
const dispatch = useDispatch()

const clickRestart = () => {
    dispatch(quiz.actions.restart())

}

    return(
        <button className='btn-restart' type='button' onClick={clickRestart}>
        Restart Quiz
      </button>
    )

}