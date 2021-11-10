import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import styled from 'styled-components'

import { quiz } from '../reducers/quiz';

export const Summary = () => {
	const answers = useSelector((state) => state.quiz.answers);
	const correct = answers.map((item) => item.isCorrect);
	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	);
	const answer = useSelector((state) =>
		state.quiz.answers.find(
			(a) => a.questionId === question.id // question could come from the previous selector in the last example
		)
	);

	return (
		<div>
			<h2>{correct.value}</h2>
		</div>
	);
};
