import { createSlice } from '@reduxjs/toolkit'

// Questions, index and otions
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
    correctAnswerIndex: 1 },

  { id: 5,
    questionText: '"This is your life and it\'s ending one minute at a time."',
    options: ['Fight Club', 'Reservoir Dogs', 'Lock stock and and two smoking barrels', 'The Godfather'],
    correctAnswerIndex: 0 },

  { id: 6,
    questionText: '"Frankly, my dear, I don\'t give a damn"',
    options: ['Inglorius Bastards', 'Citizen Cane', 'Gone with the wind', 'Fifth Element'],
    correctAnswerIndex: 2 },

  { id: 7,
    questionText: 'I\'m only brave when I have to be. Being brave doesn\'t mean you go looking for trouble.',
    options: ['The Lion King', 'Shrek', 'Hercules', 'Hunchback of Notre Dame'],
    correctAnswerIndex: 0 }

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

    /* function to got to next question, used in CurrentQuestion */

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /* function to got restart quiz, used in SummaryPage */
    restart: () => {
      return initialState
    }

  }
})