import React from 'react'
import styled from 'styled-components'
import { CurrentQuestion } from './CurrentQuestion'
import { useSelector, useDispatch } from 'react-redux'

const StartBtn = styled.button`
	background: #fef8d8;
	border: 3px solid #45413c;
	border-radius: 14px;
`
let click = false
export const WelcomePage = () => {
	const dispatch = useDispatch()
	const onStartButtonclick = () => {
		dispatch(quiz.actions.startGame())
		//find a way to return this page first (In app? and then call the CurrentQuestion?)
	}

	return (
		<>
			{!start ? (
				<main>
					<h1>Guess Whose Butt</h1>
					<section className='question-section summary'>
						<div className='answer-btn-container'>
							<h2 className='welcome-text'>
								Let’s see if you know your animal butts!
							</h2>
							<StartBtn onClick={onStartButtonclick}> Let's play! </StartBtn>
						</div>
					</section>
				</main>
			) : (
				<CurrentQuestion />
			)}
		</>
	)
}
