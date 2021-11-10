import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  {
    id: 1,
    category: "Sport",
    questionText: 'What is the largest overall prize pool in an E-Sport tournament?',
    options: [
      { id: 1, answer: '$94,687,919.00' },
      { id: 2, answer: '$24,687,919.00' },
      { id: 3, answer: '$40,018,400.00' },
      { id: 4, answer: '$15,287,500.00' },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    category: "Sport",
    questionText: 'What are the Olympic Medals predominantly made of?',
    options: [
      { id: 1, answer: 'Iron' },
      { id: 2, answer: 'Stone' },
      { id: 3, answer: 'Silver' },
      { id: 4, answer: 'Bronze' },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    category: "General",
    questionText: 'How does Sarah pronounce Router?',
    options: [
      { id: 1, answer: 'Router' },
      { id: 2, answer: 'Rooter' },
      { id: 3, answer: 'Rüter' },
      { id: 4, answer: 'Raooter' },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    category: "Food",
    questionText: 'What is the rarest M&M colour?',
    options: [
      { id: 1, answer: 'Blue' },
      { id: 2, answer: 'Red' },
      { id: 3, answer: 'Green' },
      { id: 4, answer: 'Brown' },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 5,
    category: "Food",
    questionText: 'What was the first soft drink in space?',
    options: [
      { id: 1, answer: 'Pepsi' },
      { id: 2, answer: 'Sprite' },
      { id: 3, answer: 'Coca Cola' },
      { id: 4, answer: 'Dr Pepper' },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 6,
    category: "Food",
    questionText: 'What is the hotest part of a chili?',
    options: [
      { id: 1, answer: 'The flesh at the tip' },
      { id: 2, answer: 'The seeds' },
      { id: 3, answer: 'The flesh at the base' },
      { id: 4, answer: 'The skin' },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 7,
    category: "Innovation",
    questionText: 'Which country invented ice-cream?',
    options: [
      { id: 1, answer: 'Japan' },
      { id: 2, answer: 'China' },
      { id: 3, answer: 'Italy' },
      { id: 4, answer: 'Madagascar' },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 8,
    category: "Entertainment",
    questionText: 'Which famous US festival hosted over 350,000 fans in 1969?',
    options: [
      { id: 1, answer: 'Coachella' },
      { id: 2, answer: 'Woodstock' },
      { id: 3, answer: 'Burning man' },
      { id: 4, answer: 'Live Aid' },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 9,
    category: "Innovation",
    questionText: 'Which country created Wi-Fi?',
    options: [
      { id: 1, answer: 'Australia' },
      { id: 2, answer: 'Sweden' },
      { id: 3, answer: 'India' },
      { id: 4, answer: 'Germany' },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 10,
    category: "Entertainment",
    questionText: 'In which year was the first Friends episode launched?',
    options: [
      { id: 1, answer: '1992' },
      { id: 2, answer: '1993' },
      { id: 3, answer: '1994' },
      { id: 4, answer: '1995' },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 11,
    category: "Geography",
    questionText: 'What is the current height of Mount Everest?',
    options: [
      { id: 1, answer: '8848 meters' },
      { id: 2, answer: '8049 meters' },
      { id: 3, answer: '8149 meters' },
      { id: 4, answer: '8849 meters' },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 12,
    category: "General",
    questionText: 'What is the name of the main antagonist in the Shakespeare play "Othello"?',
    options: [
      { id: 1, answer: 'Iago' },
      { id: 2, answer: 'King Lear' },
      { id: 3, answer: 'Richard' },
      { id: 4, answer: 'Othello' },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 13,
    category: "Geography",
    questionText: 'Which US state has the most active volcanoes?',
    options: [
      { id: 1, answer: 'California' },
      { id: 2, answer: 'Alaska' },
      { id: 3, answer: 'Washington' },
      { id: 4, answer: 'Hawaii' },
    ],
    correctAnswerIndex: 1,
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
  },
})
