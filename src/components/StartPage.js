import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';

const StartPage = () => {
	return (
		<div className='start-page'>
			<h1>Sex and the City Quiz</h1>
			<p>
				"I couldn't help but wonder… Could I get every question right on this
				quiz?"
			</p>
			<Link to='/quiz' className='link-styler'>
				<Button
				width="250px"
				widthDesktop="450px"
				fontSizeDesktop="1rem">
					Start quiz
				</Button>
			</Link>
		</div>
	);
};

export default StartPage;
