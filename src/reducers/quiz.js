import { createSlice } from '@reduxjs/toolkit';

const questions = [
  { id: 1, questionText: 'Which city does the river Donav not flow through?', options: ['Belgrade', 'Budapest', 'Strasbourg', 'Vienna'], correctAnswerIndex: 2 },
  { id: 2, questionText: 'During which century did Gutenberg´s printing press it possible to produce writing in larger editions?', options: ['1300', '1400', '1500', '1600'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'ABBA won Eurovision Song Contest 1974 with "Waterloo", in which city?', options: ['Amsterdam', 'Brighton', 'Dublin', 'Edinburgh'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'A traditional badminton ball is made out of feathers from a goose, but only from the left wing.', options: ['True', 'False'], correctAnswerIndex: 0 },
  { id: 5, questionText: 'Which musical had been performed in 42 countries and received 76 international awards by 2016?', options: ['Miss Saigon', 'The Book of Mormon', 'Les Misérables', 'West Side Story'], correctAnswerIndex: 2 },
  { id: 6, questionText: 'What company owns a spaceship named "SpaceShipTwo"?', options: ['Blue Origin', 'SpaceX', 'Bigelow Aerospace', 'Virgin Galactic'], correctAnswerIndex: 3 }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
};

export const quiz = createSlice({
  name: 'quiz',
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
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
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
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
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
      return initialState
    }

  }
})
