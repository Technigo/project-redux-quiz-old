import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'What is the smallest mammal in the world?', options: ['bumblebee bat', 'numbat', 'western harvest mouse', 'pigmy marmoset'], correctAnswerIndex: 0 },
  { id: 2, questionText: 'What animal has the highest blood pressure?', options: ['elephant', 'jiraffe', 'blue whale', 'humminbird'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'What is the name of the fastest animal in the world?', options: ['black marlin', 'peregrine falcon', 'humminbird', 'cheetah'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'What is the gestation period of a blue whale?', options: ['1.2 years', '9 months', '4-6 months', '10-12 months'], correctAnswerIndex: 3 },
  { id: 5, questionText: 'What is the animal can’t jump?', options: ['penguin', 'lizard', 'elephant', 'pig'], correctAnswerIndex: 2 },
  { id: 6, questionText: 'What animal has the longest lifespan?', options: ['blue whale', 'giant tortoise', 'elephant', 'panda'], correctAnswerIndex: 1 },
  { id: 7, questionText: 'What’s the maximum amount of time Alaskan wood frogs can survive being frozen?', options: ['7 months', '2 months', '10 months', '1 year'], correctAnswerIndex: 0 },
  { id: 8, questionText: 'How many different species of ladybugs are there?', options: ['379', '3,578', '5,000', '200'], correctAnswerIndex: 2 }
]

// initial state to store
// selectors to choose
const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  // actions here belongs to state.quiz
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
