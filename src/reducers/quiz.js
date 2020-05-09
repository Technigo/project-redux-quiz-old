import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 1, questionText: 'Who is this?', options: ['Good guy greg', 'Ermahgerd', 'Bad Luck Brian', 'Star Wars Kid'], image: './images/badluck.png', correctAnswerIndex: 2 },
  { id: 2, questionText: "This meme's background is usually blue and...", options: ['Orange', 'Red', 'Green', 'Yellow'], image: './images/pingvin.png', correctAnswerIndex: 1 },
  { id: 3, questionText: 'This cat is...', options: ['Angry', 'Annoyed', 'Grumpy', 'Crabby'], image: './images/cat.png', correctAnswerIndex: 2 },
  { id: 4, questionText: 'In this meme, Kermit is drinking...', options: ['Lemonade', 'Whiskey', 'Tea', 'Coffee'], image: './images/kermit.png', correctAnswerIndex: 2 },
  { id: 5, questionText: "This meme's captions typically end with the word...", options: ['Forever', 'Everywhere', 'Nobody', 'Beyond'], image: './images/toystory.png', correctAnswerIndex: 1 },
  { id: 6, questionText: 'What is the original name of this meme?', options: ['Fist bumb kid', 'Success kid', 'I hate sandcastles', 'Gonna mess you up'], image: './images/kid.png', correctAnswerIndex: 2 },
  { id: 7, questionText: 'This fist belongs to...', options: ['Arthur', 'Bart Simpson', 'Bob the builder', 'Binky Barnes'], image: './images/fist.png', correctAnswerIndex: 2 },
  { id: 8, questionText: 'Finish the meme: Is this...', options: ['alive', 'a pigeon', 'an insect', 'stupid'], image: './images/pigeon.png', correctAnswerIndex: 1 },
  { id: 9, questionText: 'Can you name this meme?', options: ['SRSLY?', 'O RLY?', 'O WLY?', 'BOY!'], image: './images/owl.png', correctAnswerIndex: 1 },
  { id: 10, questionText: "If you run into this girl, it's very likely to occur...", options: ['an accident', 'a catastrophe', 'a disaster', 'a tragedy'], image: './images/disaster.png', correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuesionIndex: 0,
  quizOver: false,
  quizStart: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    beginQuiz: (state) => {
      state.quizStart = true
    },
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
    goToNextQuestion: (state) => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizStart = true
      } else {
        state.seconds = 10
        state.currentQuesionIndex += 1
      }
    },
    goToPreviousQuestion: (state) => {
      if (state.currentQuesionIndex === 0) {
        state.quizStart = false
      } else {
        state.seconds = 10
        state.currentQuesionIndex -= 1
      }
    },
    restart: () => {
      return initialState
    }

  }
})
