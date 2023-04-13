/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'

import Question1Image from '../images/image1.png'
import Question2Image from '../images/image2.png'
import Question3Image from '../images/image3.png'
import Question4Image from '../images/image4.png'
import Question5Image from '../images/image5.png'
import Question6Image from '../images/image6.png'
import Question7Image from '../images/image7.png'
import Question8Image from '../images/image8.png'

const questions = [
  { id: 1, questionText: 'What is the name of this food?', options: ['Håkan special', 'Half special', 'Whole special', 'The wiener'], img: Question1Image, correctAnswerIndex: 1 },
  { id: 2, questionText: 'What is this building called?', options: ['The lipstick', 'The zipper', 'The wiener', 'The Håkan'], img: Question2Image, correctAnswerIndex: 0 },
  { id: 3, questionText: 'Which of the two Ullevi arenas is more recently built?', options: ['New Ullevi', 'Old Ullevi', 'The wiener', 'Håkan Arena'], img: Question3Image, correctAnswerIndex: 1 },
  { id: 4, questionText: 'Who is this?', options: ['Glenn Hysén', 'Ola Serneke', 'Poseidon', 'Håkan Hellström'], img: Question4Image, correctAnswerIndex: 3 },
  { id: 5, questionText: 'Who is this?', options: ['Håkan Hellström', 'Glenn Hysén', 'Ola Serneke', 'Poseidon'], img: Question5Image, correctAnswerIndex: 3 },
  { id: 6, questionText: 'What is the name of this statue?', options: ['Håkan on horse', 'Goldmare', 'Coppermare', 'Poseidon on horse'], img: Question6Image, correctAnswerIndex: 2 },
  { id: 7, questionText: 'What is Gothenburg sometimes called?', options: ['Little New York', 'Little Håkan town', 'Little London', 'Poseidon town'], img: Question7Image, correctAnswerIndex: 2 },
  { id: 8, questionText: 'What is this popular tourboat called?', options: ['The wiener', 'The Fish', 'The Toad', 'Gbg Tour'], img: Question8Image, correctAnswerIndex: 2 }
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
