import React from 'react'
import styled from 'styled-components'
import { CurrentQuestion } from './CurrentQuestion'

const StartBtn = styled.button`
	background: #fef8d8;
	border: 3px solid #45413c;
	border-radius: 14px;
`
let click = false
export const WelcomePage = () => {
	const onStartButtonclick = () => {
		click = true
		//find a way to return this page first (In app? and then call the CurrentQuestion?)
	}

	return (
		<main>
			<section className='question-section'>
				<h1>Guess Whose Butt</h1>
				<div className='answer-btn-container'>
					<h2>Let’s see if you know your animal butts!</h2>
					<button onClick={onStartButtonclick}> Let's play! </button>)
				</div>
			</section>
		</main>
	)
}
