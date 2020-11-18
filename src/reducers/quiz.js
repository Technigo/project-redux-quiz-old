import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 0, questionText: 'Do you speak Klingon?', options: ['Ghobe', 'HIja', 'What is Klingon?', 'Ya Ya Ding Dong'], correctAnswerIndex: 1 },
  { id: 1, questionText: 'When was Dungeons & Dragons first published?', options: ['1977', '1988', '2050', '1974'], correctAnswerIndex: 3 },
  { id: 2, questionText: 'How old is Baby Yoda?', options: ['150', '2014', '50', '1'], correctAnswerIndex: 2 },
  { id: 3, questionText: 'What\'s not an existing translation of Bilbo Baggins', options: ['Bilbo Beutlin', 'Bilbo Secker', 'Bimbo Backlin', 'Bagas Silva'], correctAnswerIndex: 3 },
  { id: 4, questionText: 'What\'s Pluto\'s current classification?', options: ['Planet', 'Dwarf Planet', 'Minor Planet', 'Gas Cloud'], correctAnswerIndex: 1 }
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