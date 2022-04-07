import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, img: './assets/thematrix.png', questionText: 'Amount of screens needed to do the Technigo boot camp', options: ['The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions', 'The Matrix Resurrections'], correctAnswerIndex: 0 },
  { id: 2, img: './assets/WarGames.png', questionText: 'The relief when your code by some witch craft finally runs', options: ['The Terminator', 'Jurassic Park', 'Alien', 'WarGames'], correctAnswerIndex: 3 },
  { id: 3, img: './assets/TheInternship.png', questionText: 'Pair Programming with someone a bit above your level', options: ['The Social Network', 'The Internship', 'Silicon Valley', 'The IT Crowd'], correctAnswerIndex: 1 },
  { id: 4, img: './assets/TheImitationGame.png', questionText: 'Intro to Redux be like', options: ['Ex Machina', 'Enigma', 'The Imitation Game', 'A Beautiful Mind'], correctAnswerIndex: 2 },
  { id: 5, img: './assets/HiddenFiguresFortran.png', questionText: 'When you typed the best code ever and localhost be like "Failed to compile"', options: ['The Girl with the Dragon Tattoo', 'Fortran', 'Hidden Figures', 'Hackers'], correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

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
