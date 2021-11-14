import { createSlice } from '@reduxjs/toolkit'
import balloon from '../balloon.svg'
import duck from '../duck.svg'
import dig from '../dig.svg'
import afraid from '../afraid.svg'
import hockey from '../hockey.svg'
import owl from '../owl.svg'
import usa from '../usa.svg'
import ear from '../ear.svg'

const questions = [
  {
    id: 1,
    questionText: 'What is a Bombay Duck?',
    options: [
      'A type of duck',
      'A type of curry',
      'A basketball term',
      'A type of fish',
    ],
    correctAnswerIndex: 3,
    // different color values for each question. Using it to style the background-color.
    backgroundColor: '#FADD57',
    imgUrl: `${duck}`
  },
  {
    id: 2,
    questionText:
      'In New Zealand what is it illegal to fly in a hot air balloon with?',
    options: ['A dog', 'A bicycle', 'A violin', 'A rooster'],
    correctAnswerIndex: 3,
    backgroundColor: '#C0E5AC',
    imgUrl: `${balloon}`
  },
  {
    id: 3,
    questionText:
      'If you dug a hole through the center of the Earth from Wellington, New Zealand, in which European country would you emerge?',
    options: ['Germany', 'Spain', 'France', 'Poland'],
    correctAnswerIndex: 1,
    backgroundColor: '#C3EEEE',
    imgUrl: `${dig}`
  },
  {
    id: 4,
    questionText: 'What are you afraid of if you are Syngenesophobic?',
    options: ['Syringes', 'Genetically modified crops', 'Relatives', 'Snakes'],
    correctAnswerIndex: 2,
    backgroundColor: '#F0D5EB',
    imgUrl: `${afraid}`
  },
  {
    id: 5,
    questionText:
      'The world’s first game of ice hockey was played with a puck made from which material?',
    options: ['Stone', 'Ice', 'Cow manure', 'Wood'],
    correctAnswerIndex: 2,
    backgroundColor: '#BCC5A3',
    imgUrl: `${hockey}`

  },
  {
    id: 6,
    questionText: 'What is the term for a group of owls?',
    options: ['Blessing', 'Terror', 'Confusion', 'Parliament'],
    correctAnswerIndex: 3,
    backgroundColor: '#C0D0EE',
    imgUrl: `${owl}`
  },
  {
    id: 7,
    questionText: 'The average person in the US opens what 13 times per day?',
    options: ['Front door', 'A can of soda', 'Refrigerator', 'A window'],
    correctAnswerIndex: 2,
    backgroundColor: '#EAC082',
    imgUrl: `${usa}`
  },
  {
    id: 8,
    questionText: 'Roughly what percentage of people in the world can wiggle their ears?',
    options: ['50 %', '40 %', '30 %', '20 %'],
    correctAnswerIndex: 3,
    backgroundColor: '#EBD4D4',
    imgUrl: `${ear}`
  },
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStart: false,
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

    startTheQuiz: (state) => {
      state.quizStart = true
    }
  },
})
