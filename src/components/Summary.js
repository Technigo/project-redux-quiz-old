import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
	const answers = useSelector((store) => store.quiz.answers)
	
	let counter = 0

	answers.forEach((response) => {
		if (response.isCorrect) {
			return counter += 1
		}
	})

	return (
		<div className="summary-container">
			<h1 className="summary-title">Summary</h1>
			{answers.map((answer) => {
				return (
					<div className="summary-details" key={answer.questionId}>
						<div className="user-answer">
							<p>You answered: {answer.answer} {answer.isCorrect ? "✅" : "❌"}</p>
						</div>
						<div className="correct-answer">
							<p>The correct answer is: {answer.question.options[answer.question.correctAnswerIndex]}</p>
						</div>
					</div>
				)
			})}
			<h1 className="score">You scored {counter} points!</h1>
		</div>
	)
}

export default Summary