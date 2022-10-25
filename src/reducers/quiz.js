import { createSlice } from '@reduxjs/toolkit'
// import styled from 'styled-components/macro'
// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: 'What is the nickname of this Stranger things character?',
    options: ['Ella', 'El', 'Ellen', 'Len'],
    backdropImg: '',
    audio: '',
    correctAnswerIndex: 1
  },
  {
    id: 2,
    questionText: 'Which one is not a character in the TV-Show La Casa de Papel?',
    options: ['Rio', 'Nairobi', 'Paris', 'Helsinki'],
    backdropImg: '',
    audio: '',
    correctAnswerIndex: 2
  },
  {
    id: 3,
    questionText: 'What is the name of the main character in The Playlist?',
    options: ['Daniel', 'Mark', 'Sophie', 'Antonella'],
    backdropImg: '',
    audio: '',
    correctAnswerIndex: 0
  },
  {
    id: 4,
    questionText: 'What is the real name of Downton Abbey?',
    options: ['Buckingham palace', 'Rochester Castle', 'Neuschwanstein', 'Highclere Castle'],
    backdropImg: '',
    audio: '',
    correctAnswerIndex: 3
  },
  {
    id: 5,
    questionText: 'In Pulp Fiction, What does Vincent tell Jules is the name of a Quarter Pounder in Europe?',
    options: ['A Magnificent Cheese Quarter', 'A Royal with Cheese', 'A Pounder with Cheese', 'The Crowned with Cheese'],
    backdropImg: '',
    audio: '',
    correctAnswerIndex: 2
  }
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
    submitAnswer: (store, action) => {
      const { questionId, answerIndex } = action.payload
      const question = store.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

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
      if (store.currentQuestionIndex + 1 === store.questions.length) {
        store.quizOver = true
      } else {
        store.currentQuestionIndex += 1
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
