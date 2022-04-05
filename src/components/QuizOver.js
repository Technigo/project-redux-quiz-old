import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import correctSticker from '../components/assets/checkmark.png'
import inCorrectSticker from '../components/assets/cross.png'
import styled from 'styled-components'
import AnswerSubmitBtn from 'components/QuestionPage'



const QuizOver = () => {
	const selectedAnswer = useSelector((state) => state.quiz.answers)
	const dispatch = useDispatch()
	const correctAnwser = selectedAnswer.filter(answer => answer.isCorrect === true)
	
	console.log (correctAnwser, 'correctAnwser')
	const onRestartClick = () => {
		dispatch(quiz.actions.restart())
	}
    //  less then 3 right + 3 or more wrong = message 1 'Oh sorry, look at more butts and try again'
	// 4 or 5 right + 1 or 2 wrong = message 2 'Nice try! You did good. But if you see a butt, check it out'
	// 6 right! = message 3 Congratulations! You really know your butts
	return (
			<section className='question-section summary-section'> 
			<h1 className='summary-h1'>Guess Whose Butt</h1>
			<p className='summary-text'>
				{correctAnwser.length <= 3 
				? 'Oh sorry, look at more butts and try again' 
				: correctAnwser.length === 4 || correctAnwser.length === 5 
				? 'Nice try! You did good. But if you see a butt, check it out'
				: 'Congratulations! You really know your butts'}
			</p>
			<div className='summary-comtainer'>

			{selectedAnswer.map((item) => (
			
				<div>
					<img src={item.question.sticker} alt={item.img_alt}/>
					<img src={item.isCorrect ? correctSticker : inCorrectSticker} alt='' />
				</div>
				
			))}
			</div>

			<button className='restart-btn' onClick={onRestartClick}>Restart</button>
			</section>
	)
}

export default QuizOver
