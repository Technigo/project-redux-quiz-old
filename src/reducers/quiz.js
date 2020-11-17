import { createSlice } from '@reduxjs/toolkit'
import { CurrentQuestion } from '../components/CurrentQuestion'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'Ungefär hur många askar av den mörka Aladdinchokladen säjs i genomsnitt varje december i Sverige?', options: ['1.2 miljoner', '4 miljoner', '2.7 miljoner'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'Vilken månad träffas världens auktoriserade tomtar på tomtarnas världskongress i Danmark?', options: ['1 April', 'November', 'Juli'], correctAnswerIndex: 2 },
  { id: 3, questionText: 'Ungefär hur mycket julskinka äts det per person till jul i Sverige varje år?', options: ['300 gram', '1 kilo', '580 gram'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'Hur mycket farinsocker gick det åt för att smycka världens störstapepparkakshus, 1100 kubikmeter stort?', options: ['800 kilo', '15 000 ton', '1,3 ton'], correctAnswerIndex: 2 },
  { id: 5, questionText: 'Vilken är den mest sålda julsingeln någonsin?', options: ['"Blue Christmas", Elvis Presley', '"Last Christmas", Wham', '"White Christmas", Bing Crosby'], correctAnswerIndex: 2 },
  { id: 6, questionText: 'En speciell katt sägs ha varit involverad när saffransbrödet fick namnet lussekatt. Vem symboliserar katten?', options: ['Djävulen', 'Lucia', 'Staffan stalledräng'], correctAnswerIndex: 0 },
  { id: 7, questionText: '1941 började Hennes & Mauritz grundare, Erling Persson, att massproducera ett julpynt som blev en storsäljare. Vad var det han tillverkade?', options: ['Adventsstakar', 'Julstjärnor', 'Julgransbelysning'], correctAnswerIndex: 1 },
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
