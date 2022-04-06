import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: 'Who wrote and performed the song "I will always love you"?',
    options: ['Whitney Huston', 'Dolly Parton', 'Celine Dion'],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    questionText:
      'What movie is Britney doing a reference to in her epic hit "Oops i did it again" from 2002?',
    options: ['Beauty and the beast', 'Bonnie and Clyde', 'Titanic'],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    questionText:
      'What band made the classic rock song "Born to be wild"  which was featured in the cult classic movie " Easy Rider" from  1969.',
    options: ['The Doors', 'SteppenWolf', 'Creedence Clearwater revival'],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    questionText: 'What is the name of ABBAs latest album?',
    options: ['Voyage', 'I still have faith', 'Dance with me'],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    questionText: 'Who has the world record for fastest rap?',
    options: ['Lil Wayne', 'Nicki Minaj', 'Eminem'],
    correctAnswerIndex: 2,
  },
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
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
        throw new Error(
          'Could not find question! Check to make sure you are passing the question id correctly.'
        )
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        )
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
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

    // quiz.actions.whatever()
    whatever: () => {
      // this is whatever
    },
  },
})
