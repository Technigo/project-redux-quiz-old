/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'


const QuizOver = () => {
	const selectedAnswer = useSelector((state) => state.quiz.answers)
	const dispatch = useDispatch()

	const onRestartClick = () => {
		dispatch(quiz.actions.restart())
	}

	return (

	)
}

export default QuizOver
