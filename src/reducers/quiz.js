import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'What is the most common colour of toilet paper in France?', options: ['White', 'Yellow', 'Pink', 'Blue'], correctAnswerIndex: 2 },
  { id: 2, questionText: 'If you dug a hole through the centre of the earth starting from Wellington in New Zealand, which European country would you end up in?', options: ['France', 'Spain', 'Italy', 'Switzerland'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'Native to the Caribbean, what sort of animal is the mountain chicken?', options: ['A frog', 'A butterfly', 'A bird', 'A beatle'], correctAnswerIndex: 0 },
  { id: 4, questionText: 'What is Scooby Doo’s full name?', options: ['Scooby Dooby', 'Scooby Doobert', 'Scooter Doo', 'Scoobert Doo'], correctAnswerIndex: 3 },
  { id: 5, questionText: 'Where was the fortune cookie invented?', options: ['Beijing', 'Hong Kong', 'San Fransisco', 'London'], correctAnswerIndex: 2 }
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
