/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	questions: [
		{
			id: 1,
			questionText: 'This song is from what movie? Click and listen!',
			options: ['Dirty Dancing ', 'Mamma Mia', 'Grease', 'Chess'],
			correctAnswerIndex: 2,
		},
		{
			id: 2,
			questionText:
				'Richard Gere and Julia Roberts played in Pretty Woman together, what was the name of the second movie they made together?',
			options: ['Shall We Dance?', 'Runaway Bride', 'Notting Hill', 'Dying Young'],
			correctAnswerIndex: 1,
		},
    {
			id: 3,
			questionText:
				'Name the ship that StarLord & Gamora travels on?',
			options: ['The Milano', 'The Dark Aster', 'Sanctuary II', 'American Eagle'],
			correctAnswerIndex: 0,
		},
    {
			id: 4,
			questionText:
				'In Brokeback Mountain, Jack and Ennis fell in love whilst herding what livestock?',
			options: ['Horses', 'Cows', 'Sheep', 'Alpacas'],
			correctAnswerIndex: 2,
		},
    {
			id: 5,
			questionText:
				'What is the name of John Travoltas and Uma Thurmans characters in Pulp Fiction?',
			options: ['Bonnie & Clyde', 'Thelma & Louise', 'Kirk & Spock', 'Mia & Vincent'],
			correctAnswerIndex: 3,
		},
	],
	answers: [],
	currentQuestionIndex: 0,
	quizOver: false,
};

export const quiz = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		
		submitAnswer: (state, action) => {

			const { questionId, answerIndex } = action.payload;
			const question = state.questions.find((q) => q.id === questionId);

			if (!question) {
				throw new Error(
					'Could not find question! Check to make sure you are passing the question id correctly.'
				);
			}

			if (question.options[answerIndex] === undefined) {
				throw new Error(
					`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
				);
			}

			state.answers.push({
				questionId,
				answerIndex,
				question,
				answer: question.options[answerIndex],
				isCorrect: question.correctAnswerIndex === answerIndex,
			});
		},

		goToNextQuestion: (state) => {
			if (state.currentQuestionIndex + 1 === state.questions.length) {
				state.quizOver = true;
			} else {
				state.currentQuestionIndex += 1;
			}
		},

		restart: () => {
			return initialState;
		},
	},
});
