import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 0,
    questionText: '“On October 3rd, he asked me what day it was. It\'s October 3rd.”',
    options: ['Pretty Little Liars', 'The Hangover', 'Mean Girls', 'Clueless'],
    correctAnswerIndex: 2 },

  { id: 1,
    questionText: ' “The world is full enough of hurts and mischances without wars to multiply them.”',
    options: ['Saving private ryan', 'Star wars', 'The wave', 'Lord of the rings'],
    correctAnswerIndex: 3 },

  { id: 2,
    questionText: '"I\'m also just a girl, standing in front of a boy, asking him to love her."',
    options: ['Love actually', 'Pretty woman', 'About a boy', 'Notting hill'],
    correctAnswerIndex: 3 },

  { id: 3,
    questionText: '"The greatest trick the devil ever pulled was convincing the world he didn\'t exist."',
    options: ['The usual suspects', 'The passion of christ', 'Jesus christ superstar', 'Gone girl'],
    correctAnswerIndex: 0 },

  { id: 4,
    questionText: '"This is the beginning of a beautiful friendship."',
    options: ['The perks of being a wallflower', 'Casablanca', 'Stand by me', 'The Intouchables'],
    correctAnswerIndex: 1 }
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
     * and `answerIndex` keys.
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