import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 },
  { id: 2, questionText: 'When was Michael Phelps last named male World Swimmer of the Year?', options: ['2012', '2014', '2016', '2018'], correctAnswerIndex: 2 },
  { id: 3, questionText: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 },
  { id: 4, questionText: 'When was Michael Phelps last named male World Swimmer of the Year?', options: ['2012', '2014', '2016', '2018'], correctAnswerIndex: 2 },
  { id: 5, questionText: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 },
  { id: 6, questionText: 'When was Michael Phelps last named male World Swimmer of the Year?', options: ['2012', '2014', '2016', '2018'], correctAnswerIndex: 2 },
  { id: 7, questionText: 'When was Michael Phelps last named male World Swimmer of the Year?', options: ['2012', '2014', '2016', '2018'], correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: null,
  btnColor: ''
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
      let newAnswer = question.options[answerIndex];

      if (newAnswer === undefined || newAnswer === null) {
        newAnswer = 'Nothing selected';
      }

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.correctAnswerIndex === answerIndex) {
        console.log('correct index', question.correctAnswerIndex, 'selectedIndex', answerIndex)
        state.btnColor = 'green'
      } else {
        console.log('correct index', question.correctAnswerIndex, 'wrongselectedIndex', answerIndex)
        state.btnColor = 'red'
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: newAnswer,
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
        state.btnColor = ''
      } else {
        state.currentQuestionIndex += 1
        state.btnColor = ''
      }
    },

    startQuiz: (state) => {
      if (state.quizOver === null) {
        state.quizOver = false
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
