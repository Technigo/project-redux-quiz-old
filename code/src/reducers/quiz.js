import { createSlice } from '@reduxjs/toolkit';
// import { pumpkinHappy } from './images/pumpkinHappy.png';
// import { pumpkinSad } from './images/pumpkinSad.png';

// Change these to your own questions!
const questions = [
  { id: 1,
    questionText: 'What’s the name of the clown from Stephen Kings famous story?',
    options: ['Clown', 'Pennywise', 'It', 'Richie Tozier'],
    correctAnswerIndex: 1 },
  { id: 2,
    questionText: 'In Scottish folklore, girls believed that if they hung wet sheets in front of the fire, or looked into mirrors while walking downstairs at midnight on Halloween – they would see images of what?',
    options: ['Their future children', 'Their future husbands', 'Their ancestors', 'A magical stew recipe'],
    correctAnswerIndex: 1 },
  { id: 3,
    questionText: 'Hundreds of years ago it was believed that ghosts came back to the earthly world on Halloween and people thought they would encounter ghosts if they left their homes. To avoid being recognised by these ghosts, people would:',
    options: ['Wear masks to blend in with the ghosts', 'Bang loudly on pots and pans when outside', 'Use enchanted invisibility cloaks', 'Only move in large groups'],
    correctAnswerIndex: 0 },
  { id: 4,
    questionText: 'How many Halloween-movies are there?',
    options: ['7', '3', '10', '13'],
    correctAnswerIndex: 3 },
  { id: 5,
    questionText: 'Where does the tradition of Halloween come from?',
    options: ['the Native American celebration of Soyal', 'the Irish celebration Samhain', 'the Creol celebration La Toussaint', 'the Mexican celebration of día de muertos'],
    correctAnswerIndex: 1 },
  { id: 6,
    questionText: 'How many pieces of candy does the average American household give to each trick or treater on Halloween?',
    options: ['3', '7', '5', '2'],
    correctAnswerIndex: 3 },
  { id: 7,
    questionText: 'Which former leader’s ghost has there been several sightings of throughout the years?',
    options: ['John F Kennedy ', 'Queen Mary I (“Bloody Mary”)', 'Genghis Khan', 'Abraham Lincoln'],
    correctAnswerIndex: 3 },
  { id: 8,
    questionText: 'The word ‘witch’ comes from the old English word ‘wicce’, meaning what?',
    options: ['Wise woman', 'Magician', 'Wicked', 'Old lady'],
    correctAnswerIndex: 0 }
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
