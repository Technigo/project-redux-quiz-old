import React from 'react'
import {quiz} from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'

const Summary = () => {
    const answers = useSelector((state) => state.quiz.answers[state.quiz.answer])
    const dispatch = useDispatch()

    const clickRestart = () => {
        dispatch(quiz.actions.restart())
    }

    return(
    <div>
      <p>Hello</p>
      <button onClick={clickRestart}>Restart</button>
    </div>


    )
}

export default Summary

