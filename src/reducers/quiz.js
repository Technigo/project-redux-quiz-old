
import { createSlice } from '@reduxjs/toolkit'
// import { TfiTime } from 'react-icons/tfi'

const questions = [
  { id: 1,
    img: '/images/questionImg1.jpg',
    questionText: 'What is Germany said to have invented?',
    options: ['/images/option1.png', '/images/option2.png', '/images/option3.png', '/images/option4.png'],
    correctAnswerIndex: 0 },

  { id: 2,
    img: '/images/questionImg2.jpg',
    questionText: 'What is the common name for dried plums?',
    options: ['Prunes', 'Grapes', 'Raisins', 'Apricots'],
    correctAnswerIndex: 0 },

  { id: 3,
    img: '/images/questionImg3.jpg',
    questionText: 'What name does deer meat go by?',
    options: ['Squab', 'Veal', 'Venison', 'Mutton'],
    correctAnswerIndex: 2 },

  { id: 4,
    img: '/images/questionImg4.jpg',
    questionText: 'What other name does “corn” go by?',
    options: ['Yellow rice', 'Popcorn', 'Barley', 'Maize'],
    correctAnswerIndex: 3 },

  { id: 5,
    img: '/images/questionImg5.jpg',
    questionText: 'What is the primary ingredient in hummus?',
    options: ['Corn', 'Chickpeas', 'Lentils', 'Cabbage'],
    correctAnswerIndex: 1 },

  { id: 6,
    img: '/images/questionImg6.jpg',
    questionText: 'Which country produces the most coffee in the world?',
    options: ['Brazil', 'Colombia', 'Argentina', 'Peru'],
    correctAnswerIndex: 0 },

  { id: 7,
    img: '/images/questionImg7.jpg',
    questionText: 'What is the name of buckwheat noodles?',
    options: ['Ramen', 'Somen', 'Soba', 'Udon'],
    correctAnswerIndex: 2 },

  { id: 8,
    img: '/images/questionImg8.jpg',
    questionText: 'Which flower does the spice saffron come from?',
    options: ['Orchid', 'Crocus', 'Nasturtium', 'Poppy'],
    correctAnswerIndex: 1 },

  { id: 9,
    img: '/images/questionImg9.jpg',
    questionText: 'This is the national dish of Spain. What is it called?',
    options: ['Risotto', 'Paella', 'Biryani', 'Jambalaya'],
    correctAnswerIndex: 1 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: null,
  btnColor: '',
  startTime: 0,
  disabledButtons: false,
  correctAnswerIndicator: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      let newAnswer = question.options[answerIndex];
      state.correctAnswerIndicator = true
      state.disabledButtons = true

      if (newAnswer === undefined || newAnswer === null) {
        newAnswer = 'Nothing selected';
      }

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }
      if (question.correctAnswerIndex) {
        state.btnColor = '#56ab2f'
      }
      if (question.correctAnswerIndex === answerIndex) {
        console.log('correct index', question.correctAnswerIndex, 'selectedIndex', answerIndex)
        state.btnColor = '#56ab2f'
      } else {
        console.log('correct index', question.correctAnswerIndex, 'wrongselectedIndex', answerIndex)
        state.btnColor = '#FF416C';
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: newAnswer,
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    goToNextQuestion: (state) => {
      state.disabledButtons = false;
      state.btnColor = ''
      state.correctAnswerIndicator = false
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    startQuiz: (state) => {
      if (state.quizOver === null) {
        state.quizOver = false
        state.startTime = new Date().getTime()
      }
    },

    restart: () => {
      return initialState
    }

  }
})
