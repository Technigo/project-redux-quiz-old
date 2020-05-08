import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'Who is this?', options: ['Good guy greg', 'Ermahgerd', 'Bad Luck Brian', 'Star Wars Kid'], correctAnswerIndex: 2 },
  { id: 2, questionText: "This meme's background is usually blue and...", options: ['Orange', 'Red', 'Green', 'Yellow'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'This cat is...', options: ['Angry', 'Annoyed', 'Grumpy', 'Crabby'], correctAnswerIndex: 2 },
  { id: 4, questionText: 'In this meme, Kermit is drinking...', options: ['Lemonade', 'Whiskey', 'Tea', 'Coffee'], correctAnswerIndex: 2 },
  { id: 5, questionText: "This meme's captions typically end with the word...", options: ['Forever', 'Everywhere', 'Nobody', 'Beyond'], correctAnswerIndex: 1 },
  { id: 6, questionText: 'This meme started out as a...', options: ['YouTube video', 'Vine', 'Twitter tweet', 'Tumblr post'], correctAnswerIndex: 0 },
  { id: 7, questionText: 'This fist belongs to...', options: ['Arthur', 'Bart Simpson', 'Bob the builder', 'Binky Barnes'], correctAnswerIndex: 2 },
  { id: 8, questionText: 'Finish the meme: Is this...', options: ['...alive', '...a pigeon', '...an insect', '...stupid'], correctAnswerIndex: 1 },
  { id: 9, questionText: 'Can you name this meme?', options: ['SRSLY?', 'RLY?', 'OWLY?', 'BOY!'], correctAnswerIndex: 1 },
  { id: 10, questionText: "If you run into this girl, it's very likely to occur...", options: ['an accident', 'a catastrophe', 'a disaster', 'a tragedy'], correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuesionIndex: 0,
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
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuesionIndex += 1
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
