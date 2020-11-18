import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
  { 
    id: 1, 
    questionText: 'Approximately how many boxes of the dark Aladdin chocolate box are sold on average every December in Sweden?', 
    options: ['1.2 millions', '4 millions', '2.7 millions'], 
    correctAnswerIndex: 1 
  },
  { 
    id: 2, 
    questionText: 'Which month of the year do the Worlds Authorized Santas meet at the Santa Claus World Congress in Denmark?', 
    options: ['April', 'November', 'July'], 
    correctAnswerIndex: 2 
  },
  { 
    id: 3, 
    questionText: 'Approximately how much Christmas ham is eaten per person for Christmas in Sweden each year?', 
    options: ['300 gram', '1 kilo', '580 gram'], 
    correctAnswerIndex: 1 
  },
  { 
    id: 4, 
    questionText: 'How much brown sugar did it take to decorate the worlds largest gingerbread house, 1100 cubic meters in size?', 
    options: ['800 kilo', '15 000 tons', '1,3 tons'], 
    correctAnswerIndex: 2 
  },
  { 
    id: 5, 
    questionText: 'Which is the best-selling Christmas single ever?', 
    options: ['"Blue Christmas", Elvis Presley', '"Last Christmas", Wham', '"White Christmas", Bing Crosby'], 
    correctAnswerIndex: 2 
  },
  { 
    id: 6, 
    questionText: 'A special cat is said to have been involved when the saffron bread was named lussekatt. Who symbolizes the cat?', 
    options: ['The Devil', 'Lucia', 'Staffan stalledräng'], 
    correctAnswerIndex: 0 
  },
  { 
    id: 7, 
    questionText: 'In 1941, H&M founder, Erling Persson, began mass-producing a Christmas decoration that became a bestseller. What was he making?', 
    options: ['Advent Candle Stick', 'Christmas Star', 'Christmas Tree Lighting'], 
    correctAnswerIndex: 1 
  },
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

    /*
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
