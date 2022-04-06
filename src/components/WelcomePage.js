import React from 'react'
import styled from 'styled-components'


const StartBtn = styled.button`
	background: #fef8d8;
	border: 3px solid #45413c;
	border-radius: 14px;
`

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
					<StartBtn onClick={onStartButtonclick}> Let's play! </StartBtn>)
				</div>
			</section>
		</main>
	)
}
