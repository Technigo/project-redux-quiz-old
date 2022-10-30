import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'Where does the show take place?', options: ['Brooklyn', 'Manhattan', 'San Francisco', 'Chicago'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'What year is Ted narrating the story from?', options: ['2020', '2027', '2030', '2034'], correctAnswerIndex: 2 },
  { id: 3, questionText: 'What instrument does Ted steal for Robin?', options: ['A French horn', 'A tuba', 'A saxophone', 'A trumpet'], correctAnswerIndex: 0 },
  { id: 4, questionText: 'Who does Barney belive is his father?', options: ['Alex Trebek', 'Dick Clark', 'Peter Marshall', 'Bob Barker'], correctAnswerIndex: 3 },
  { id: 5, questionText: 'What embarrassing tattoo does Ted get in Season 3?', options: ['A unicorn', 'A skull', 'A butterfly', 'A pineapple'], correctAnswerIndex: 2 }
]

const countdownInitialValue = 30

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  countdown: countdownInitialValue
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

    resetCountdown: (state) => {
      state.countdown = countdownInitialValue
    },
    setCountdown: (state, seconds) => {
      state.countdown = seconds
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
