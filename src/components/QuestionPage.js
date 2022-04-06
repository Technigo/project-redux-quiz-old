import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled, { keyframes } from 'styled-components'

const AnswerSubmitBtn = styled.button`
	align-self: center;
	background: #fef8d8;
	color: #000;
	border: solid #000 3px;
	border-radius: 10px;
	padding: 10px;
	font-size: 18px;
	width: 10em;
	margin-bottom: 1em;
	background: ${(props) => props.background};
`

const QuestionPage = () => {
	const dispatch = useDispatch()

	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	)

	console.log('question', question)
	const answer = useSelector((state) =>
		state.quiz.answers.find((a) => a.questionId === question.id)
	)
	console.log('answer', answer)

	const answerArray = useSelector((state) => state.quiz.answers)
	const currentQuestionIndex = useSelector(
		(state) => state.quiz.currentQuestionIndex
	)

	console.log(answerArray)

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
		setTimeout(displayNextQuestion, 1500)
	}

	const displayNextQuestion = () => {
		dispatch(quiz.actions.goToNextQuestion())
	}

	//Check the answer state - correct or incorrect
	const changeColorBtn = (indexOption) => {
		if (answerArray.length === currentQuestionIndex) {
			return '#fef8d8'
		} else {
			if (question.correctAnswerIndex === indexOption) {
				return 'green'
			}
			return 'red'
		}
	}

	return (
		<section className='question-section'>
			<h1>Guess Whose Butt</h1>
			<div className='question-container'>
				<img
					className='question-img'
					src={question.img}
					alt={question.img_alt}
				/>
				<div className='answer-btn-container'>
					{question.options.map((item, index) => (
						<AnswerSubmitBtn
							type='submit'
							onClick={() => onAnswerSubmit(question.id, index)}
							key={item}
							background={changeColorBtn(index)}
						>
							{item}
						</AnswerSubmitBtn>
					))}
				</div>
			</div>
		</section>
	)
}

export default QuestionPage