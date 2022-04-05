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
		<div>
			<p>Game Over</p>
			{selectedAnswer.map((item) => (
				<>
					<p>
						{item.isCorrect
							? item.answer + 'correct'
							: item.answer + 'incorrect'}
					</p>
				</>
			))}

			<button onClick={onRestartClick}>Restart</button>
		</div>
	)
}

export default QuizOver
