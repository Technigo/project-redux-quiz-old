import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'What is the output of the following code: console.log("2" + 2);', options: ['4', '"22"', 'TypeError', 'NaN'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'Which keyword is used to declare a variable in JavaScript? ', options: ['int', 'var', 'let', 'const'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'Which of the following is NOT a primitive data type in JavaScript? ', options: ['number', 'string', 'boolean', 'object'], correctAnswerIndex: 3 },
  { id: 4, questionText: 'Which method is used to add an element to the end of an array in JavaScript?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correctAnswerIndex: 0 },
  { id: 5, questionText: 'What is the output of the following code: console.log(typeof null); ', options: ['"null"', '"undefined"', '"object"', '"string"'], correctAnswerIndex: 2 },
  { id: 6, questionText: 'Which operator is used to check if two values are equal in JavaScript? ', options: ['==', '===', '=', '!='], correctAnswerIndex: 0 }
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
      console.log(state.answers)
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
