import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 1, questionText: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 },
  { id: 2, questionText: 'When was Michael Phelps last named male World Swimmer of the Year?', options: ['2012', '2014', '2016', '2018'], correctAnswerIndex: 2 },
  { id: 3, questionText: 'Which female tennis player has won the highest number of Grand Slams?', options: ['Venus Williams', 'Steffi Graf', 'Serena Williams', 'Margaret Court'], correctAnswerIndex: 3 },
  { id: 4, questionText: 'Who is the highest run-scorer of all time in International cricket?', options: ['Sachin Tendulkar', 'Kumar Sangakkara', 'Ricky Ponting', 'Jacques Kallis'], correctAnswerIndex: 0 },
  { id: 5, questionText: 'In which sport do teams compete to win the Stanley Cup?', options: ['Badmiton', 'Ice hockey', 'Football', 'Cricket'], correctAnswerIndex: 1 }
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

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    restart: () => {
      return initialState
    }

  }
})
