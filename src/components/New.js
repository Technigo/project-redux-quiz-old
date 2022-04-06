import React from 'react'
import styled from 'styled-components'
import { CurrentQuestion } from './CurrentQuestion'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'


const New = () => {
    const start = useSelector((state) => state.quiz.start);
    const dispatch = useDispatch();

    const startTheGame = () => {
		dispatch(quiz.actions.startGame())
	}

    return <button onClick={startTheGame}>Click</button>
    

}

export default New