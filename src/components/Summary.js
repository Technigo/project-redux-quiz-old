import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import Rate from "./Rating";


export const Summary = () => {
	const answers = useSelector((state) => state.quiz.answers);
	const answerCorrect = answers.filter((item) => item.isCorrect);
  const dispatch = useDispatch()


	return (
	
			<div className='summary'>
				<p>
					You got: {answerCorrect.length} out of {answers.length}
				</p>
				<button onClick={() => dispatch(quiz.actions.restart())}>
						Play again
				</button>
				<div className="quiz-text">
					<p >How was the quiz</p>
				</div>
				<Rate />

			</div>
	
	);
};

