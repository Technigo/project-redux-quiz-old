import { createSlice } from '@reduxjs/toolkit'
import code from '../assets/code.jpg'

const questions = [
  { id: 1, imgUrl: code, questionText: 'Which of these programming languages was developed by Netscape in 1995 for use in web pages?', options: ['HTML', 'JavaScript', 'Python', 'Java'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'In CSS, what property is used to control the spacing between elements?', options: ['padding', 'margin', 'border', 'height'], correctAnswerIndex: 0 },
  { id: 3, questionText: 'What is the name of the CSS property used to make text bold?', options: ['font-style', 'font-weight', 'font-size', 'line-height'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'Which of these companies was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne?', options: ['Google', 'Microsoft', 'Apple', 'Amazon'], correctAnswerIndex: 2 },
  { id: 5, questionText: 'Which of these tags is used to create an unordered list in HTML?', options: ['<ul>', '<ol>', '<li>', '<p>'], correctAnswerIndex: 0 },
  { id: 6, questionText: 'In JavaScript, what method is used to add an element to the end of an array?', options: ['unshift()', 'shift', 'pop', 'push'], correctAnswerIndex: 3 },
  { id: 7, questionText: 'What does the acronym API stand for?', options: ['Automated Programming Interface', 'Automated Programming Integration', 'Application Programming Interface', 'Advanced Programming Integration'], correctAnswerIndex: 2 },
  { id: 8, questionText: 'Who created React?', options: ['Mark Zuckerberg', 'Jordan Walke', 'Jack Dorsey', 'Larry Page'], correctAnswerIndex: 1 },
  { id: 9, questionText: 'What is the main concept behind Reacts Virtual DOM?', options: ['It allows for faster rendering of components', 'It reduces the number of HTTP requests', 'It enables server-side rendering', 'It ensures better compatibility with older browsers'], correctAnswerIndex: 0 },
  { id: 10, questionText: 'What is the purpose of the mapStateToProps function in React-Redux?', options: ['It maps the state of the Redux store to props for a component', 'It maps the dispatch function to props for a component', 'It defines the shape of the Redux store', 'It specifies which actions a component can dispatch'], correctAnswerIndex: 0 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStart: false,
  currentQuestion: 1
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
    },
    startQuiz: (state) => {
      state.quizStart = true
    }

  }
})
