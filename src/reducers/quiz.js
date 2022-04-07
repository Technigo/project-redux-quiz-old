import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 1, img: './assets/thinking.png', questionText: 'How many thoughts do people have in a normal day on average?', options: ['500', '6 000', '70 000', '12 000'], correctAnswerIndex: 2 },
  { id: 2, img: "./assets/poop.png", questionText: 'How much poop will a flock of 50 Canadian geese deposit each year?', options: ['1 000 kg', '750 kg', '5 000 kg', '2 500 kg'], correctAnswerIndex: 3 },
  { id: 3, img: "./assets/speed.png", questionText: 'How fast can particles travel when a person is sneezing freely?', options: ['100 km/h', '160 km/h', '70 km/h', '300 km/h'], correctAnswerIndex: 1 },
  { id: 4, img: "./assets/bone.png", questionText: 'How much meat could a cannibal take out of a man weighing 80 kg?', options: ['35 kg', '10 kg', '70 kg', '55 kg'], correctAnswerIndex: 0 },
  { id: 5, img: "./assets/thinker.png", questionText: 'How many questions does the average 4-year-old kid ask each day?', options: ['400', '2000', '80', '750'], correctAnswerIndex: 0 },
  { id: 6, img: "./assets/mouth.png", questionText: 'How wide is the mouth of the person with the widest mouth on earth?', options: ['32 cm', '15 cm', '22 cm', '17 cm'], correctAnswerIndex: 3 },
  { id: 7, img: "./assets/sick.png", questionText: 'What is the cumulative time people suffer from colds and sore throat?', options: ['3 years', '7 months', '18 months', '5.5 years'], correctAnswerIndex: 0 },
  { id: 8, img: "./assets/slinky.png", questionText: 'How long is the popular metal spring toy Slinky when it is uncoiled?', options: ['24 m', '4 m', '12.5 m', '20 m'], correctAnswerIndex: 3 },
  { id: 9, img: "./assets/beetle.png", questionText: 'How many people worldwide eat insects each and every single day?', options: ['5 million', '2 billion', '100 million', '3.5 billion'], correctAnswerIndex: 1 },
  { id: 10, img: "./assets/kiss.png", questionText: 'How much longer do men who kiss their wife in the morning live?', options: ['5 months', '8.5 years', '5 years', '180 days'], correctAnswerIndex: 2 },
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
