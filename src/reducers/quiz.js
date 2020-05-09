import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 0, questionText: 'Who is this?', options: ['Good guy greg', 'Ermahgerd', 'Bad Luck Brian', 'Star Wars Kid'], image: './images/badluck.png', correctAnswerIndex: 2 },
  { id: 1, questionText: "This meme's background is usually blue and...", options: ['Orange', 'Red', 'Green', 'Yellow'], image: './images/pingvin.png', correctAnswerIndex: 1 },
  { id: 2, questionText: 'This cat is...', options: ['Angry', 'Annoyed', 'Grumpy', 'Crabby'], image: './images/cat.png', correctAnswerIndex: 2 },
  { id: 3, questionText: 'In this meme, Kermit is drinking...', options: ['Lemonade', 'Whiskey', 'Tea', 'Coffee'], image: './images/kermit.png', correctAnswerIndex: 2 },
  { id: 4, questionText: "This meme's captions typically end with the word...", options: ['Forever', 'Everywhere', 'Nobody', 'Beyond'], image: './images/toystory.png', correctAnswerIndex: 1 },
  { id: 5, questionText: 'What is the original name of this meme?', options: ['Fist bumb kid', 'Success kid', 'I hate sandcastles', 'Gonna mess you up'], image: './images/kid.png', correctAnswerIndex: 2 },
  { id: 6, questionText: 'This fist belongs to...', options: ['Arthur', 'Bart Simpson', 'Bob the builder', 'Binky Barnes'], image: './images/fist.png', correctAnswerIndex: 2 },
  { id: 7, questionText: 'Finish the meme: Is this...', options: ['alive', 'a pigeon', 'an insect', 'stupid'], image: './images/pigeon.png', correctAnswerIndex: 1 },
  { id: 8, questionText: 'Can you name this meme?', options: ['SRSLY?', 'O RLY?', 'O WLY?', 'BOY!'], image: './images/owl.png', correctAnswerIndex: 1 },
  { id: 9, questionText: "If you run into this girl, it's very likely to occur...", options: ['an accident', 'a catastrophe', 'a disaster', 'a tragedy'], image: './images/disaster.png', correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  disabled: true,
  optionDisabled: false,
  seconds: 10,
  timerStart: true
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      state.timerStart = false
      state.disabled = false
      state.optionDisabled = true
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
        state.quizStart = true
      } else {
        state.disabled = true
        state.optionDisabled = false
        state.seconds = 10
        state.timerStart = true
        state.currentQuestionIndex += 1
      }
    },
    goToPreviousQuestion: (state) => {
      state.disabled = true
      state.optionDisabled = false
      state.timerStart = true
      state.seconds = 10
      state.currentQuestionIndex -= 1
    },
    restart: () => {
      return initialState
    },
    setTimer: (state) => {
      state.timerStart = false
    },
    countdownSeconds: (state) => {
      state.seconds -= 1
    }
  }
})
