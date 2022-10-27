import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'In Spain there is a tradition during Christmas that kids get to hit a log for it to expell their gifts. What is the log called?', options: ['Tree of Joy', 'Shitty Dude', 'Wooden Gifter', 'Papa Pine'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'Every year on Christmas Eve, as many as 40% of the population in Sweden gather around to watch Donald Duck´s Christmas special on TV. But witch of the following movies isn’t part of the Christmas special?', options: ['Lady and the Tramp', 'Snow White and the Seven Dwarfs', 'Cinderella', 'The Lion King'], correctAnswerIndex: 3 },
  { id: 3, questionText: 'As if the threat of missing out on presents wasn’t bad enough, Austrian kids who end up on Santa’s naughty list also have to worry about a horned, hairy beast that snatches misbehaving children in his wicker basket, serving as Saint Nicholas’ creepy enforcer. What is the name of this half-goat demon?', options: ['Kraken', 'Krampus', 'Krackle', 'Karen'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'Christmas isn’t huge in Japan, but a ridiculously successful ad campaign during the 1970’s established the tradition of families eating at this fast food restaurant on December 25. What fast food chain is it?', options: ['McDonald’s', 'Pizza Hut', 'Burger King', 'KFC (Kentucky Fried Chicken'], correctAnswerIndex: 3 },
  { id: 5, questionText: 'Twelve days after Santa’s visit, on the eve of the Epiphany (January 5), families across Italy leave out something for the witch ‘La Befana’, who pops down the chimney on her broomstick. What is it that they leave out for her?', options: ['A glass of milk and cavallucci cookies', 'A glass of wine and some sausages', 'An espresso', 'A peace of focaccia'], correctAnswerIndex: 1 }
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
