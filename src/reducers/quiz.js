/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'Who is Phoebe`s on-and-off wedding planner?', options: ['Monica', 'Ross', 'Mike', 'Rachel'], correctAnswerIndex: 0 },
  { id: 2,
    questionText: 'Why are Ross and Rachel late to Phoebe`s birthsday party? ',
    options:
  ['They got lost ', 'They had sex', ' They locked themself out of the apartment, with Emma inside ', 'They had to work late'
  ],
    correctAnswerIndex: 2 },
  { id: 3, questionText: 'After the duck definitely doesn not throw up in Joe`s bed, what does he find under Reachel`s pillow?', options: ['Sleepy pills', 'massager', ' "dirty" book  ', ' pigama'], correctAnswerIndex: 2 },
  { id: 4, questionText: 'Who is the second friend to find out about Monica and Chandler?', options: ['Joey ', 'Rachel', 'Phoebe', 'Ross'], correctAnswerIndex: 1 },
  { id: 5, questionText: 'Why does Rachel gladly agree to Phoebe setting up Ross with her friend Bonnie?', options: ['She thinks Bonnie is bold', 'She is over Ross', 'She has a new boyfriend', ' She moved out to Paris'], correctAnswerIndex: 0 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  correctAnswer: null
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
    submitAnswer: (store, action) => {
      const { questionId, answerIndex } = action.payload
      const question = store.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }
      // if (question.correctAnswerIndex === answerIndex) {
      //   store.correctAnswer = true
      // } else if (!question.correctAnswerIndex === answerIndex) {
      //   store.correctAnswer = false
      // }
      store.answers.push({
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
    goToNextQuestion: (store) => {
      store.correctAnswer = null
      if (store.currentQuestionIndex + 1 === store.questions.length) {
        store.quizOver = true
      } else {
        store.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to show if correct or not.
     *
     * This action does not require a payload.
     */
    displayCorrectOrWrong: (store, action) => {
      const { questionId, answerIndex } = action.payload
      const question = store.questions.find((q) => q.id === questionId)

      if (question.correctAnswerIndex === answerIndex) {
        store.correctAnswer = true
        // document.getElementById('correct').style.display = 'block'
      } else {
        store.correctAnswer = false
        // document.getElementById('wrong').style.display = 'block'
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
