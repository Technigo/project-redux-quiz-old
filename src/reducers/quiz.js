import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: 'Monica briefly dates billionaire Pete Becker. Which country does he take her to for their first date?',
    options: ['France', 'England', 'Italy', 'Canada', 'Spain'],
    correctAnswerIndex: 2
  },

  {
    id: 2,
    questionText: 'Rachel was popular in high school. Her prom date Chip ditched her for which girl at school?',
    options: ['Janine Lecroix', 'Amy Welsh', 'Janice Litman-Goralnik', 'Phoebe Buffay', 'Emily Waltham'],
    correctAnswerIndex: 1
  },

  {
    id: 3,
    questionText: 'What’s the name of the 1950s-themed diner where Monica worked as a waitress?',
    options: ['Golden Pigeon Diner', 'The Crispy Biscuit', 'Momma’s Kitchen', 'Pinup Paradise Diner', 'The Moondance Diner'],
    correctAnswerIndex: 4
  },

  {
    id: 4,
    questionText: 'Which character has a twin?',
    options: ['Phoebe Buffay', ' Ross Geller', 'Joey Tribiani', 'Gunther', 'Carol Willick'],
    correctAnswerIndex: 0
  },

  {
    id: 5,
    questionText: 'Who is Estelle?',
    options: ['Central Perk owner', 'Chandler’s first love', 'Carol’s wife', 'Joey’s acting agent', 'Rachel’s mother'],
    correctAnswerIndex: 3
  },

  {
    id: 6,
    questionText: 'When Ross and Rachel were "on a break," Ross slept with Chloe. Where does she work?',
    options: ['The grocery store', 'Oracle', 'Central Perk', 'Microsoft', 'Xerox'],
    correctAnswerIndex: 4
  },

  {
    id: 7,
    questionText: 'What fake name does Phoebe use when she wants to remain anonymous?',
    options: ['Princess Consuela', 'Regina Phalange', 'Miranda Knuckles', 'Rachel Green', 'Amanda Higgins'],
    correctAnswerIndex: 1
  }

]
const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}
// initialState.questions

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
    }

  }
})
