import { createSlice } from "@reduxjs/toolkit";

// Change these to your own questions!
const questions = [
	{
		id: 1,
		imgUrl: "",
		questionText: "Which of these  museums do not  exist in Sweden?",
		options: [
			"Potato museum",
			"James Bond Museum",
			"Fermented herring museum (surströmming)",
			"Caravan museum",
		],
		correctAnswerIndex: 0,
		answerText:
			"Although potatoes have been a core pillar of Swedish culinary history for centuries it does not boast its own museum. BUT! If you felt like that was a bummer you will be happy to hear there is one or several potato museum/s in Poland, Belgium(2), Canada(2), Denmark, France, Germany(3), Italy and The United States of America (2)",
	},
	{
		id: 2,
		imgUrl: "",
		questionText: "Where is the oldest open air museum located?",
		options: ["Georgia", "The United States", "South Africa", "Sweden"],
		correctAnswerIndex: 3,
		answerText:
			"Sweden! Skansen was opened in 1891 and 1,3 million people visit it annually.",
	},
	{
		id: 3,
		imgUrl: "https://sworld.co.uk/img/img/189/photoAlbum/99633/originals/0.jpg",
		questionText: "Where is this museum located?",
		options: ["London", "Athens", "Rome", "Paris"],
		correctAnswerIndex: 0,
		answerText:
			"This is the British Museum. The architecture is heavily inspired by ancient Greek architecture. This museum is older than the USA.",
	},
	{
		id: 4,
		imgUrl: "",
		questionText:
			"Museum of modern art (MoMA) is a world famous museum in New York. But since 1993 have a competitor with the acronym MoBA. What does MoBA stand for?",
		options: [
			"Museum of Botanical Art",
			"Museum of Biological Art",
			"Museum of Bad Art ",
			"Museum of Badger Art",
		],
		correctAnswerIndex: 2,
		answerText:
			"Museum of Bad art is located outside of Boston and has a large collection of what they describe as “The pieces in the MoBA collection range from the work of talented artists that have gone awry to works by (...) artist barely in control of the brush.”",
	},
	{
		id: 5,
		imgUrl:
			"https://nypost.com/wp-content/uploads/sites/2/2016/03/2-photos13.jpg?quality=80&strip=all",
		questionText:
			"This piece of work is called Ecce Homo and was first painted in 1930. When a woman tried to restore it it swept the world with its “unique look” to say the least. When was this restoration performed? ",
		options: ["2008", "2012", "2015", "2017"],
		correctAnswerIndex: 1,
		answerText:
			"Even though a lot of people saw a destroyed old mural and were upset,  many flocked to the church in Spain to see the artwork, making it more valuable than it was before.",
	},
];

const initialState = {
	questions,
	answers: [],
	currentQuestionIndex: 0,
	quizOver: false,
};

export const quiz = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		/**
		 * Use this action when a user selects an answer to the question.
		 * The answer will be stored in the `quiz.answers` state with the
		 * following values:
		 *
		 *    questionId  - The id of the question being answered.
		 *    answerIndex - The index of the selected answer from the question's options.
		 *    question    - A copy of the entire question object, to make it easier to show
		 *                  details about the question in your UI.
		 *    answer      - The answer string.
		 *    isCorrect   - true/false if the answer was the one which the question says is correct.
		 *
		 * When dispatching this action, you should pass an object as the payload with `questionId`
		 * and `answerIndex` keys. See the readme for more details.
		 */
		submitAnswer: (state, action) => {
			const { questionId, answerIndex } = action.payload;
			const question = state.questions.find((q) => q.id === questionId);

			if (!question) {
				throw new Error(
					"Could not find question! Check to make sure you are passing the question id correctly."
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

		/**
		 * Use this action to progress the quiz to the next question. If there's
		 * no more questions (the user was on the final question), set `quizOver`
		 * to `true`.
		 *
		 * This action does not require a payload.
		 */
		goToNextQuestion: (state) => {
			if (state.currentQuestionIndex + 1 === state.questions.length) {
				state.quizOver = true;
			} else {
				state.currentQuestionIndex += 1;
			}
		},

		/**
		 * Use this action to reset the state to the initial state the page had
		 * when it was loaded. Who doesn't like re-doing a quiz when you know the
		 * answers?!
		 *
		 * This action does not require a payload.
		 */
		restart: () => {
			return initialState;
		},
	},
});
