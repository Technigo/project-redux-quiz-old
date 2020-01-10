import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: 'What is the capital city of Bali?',
    options: ['Ubud', 'Uluwato', 'Denpasar', 'Sanur'],
    correctAnswerIndex: 2
  },
  {
    id: 2,
    questionText:
      'What religion is observed by over 92% of the population of Bali?',
    options: ['Muslim', 'Hinduism', 'Christian', 'Buddhism'],
    correctAnswerIndex: 1
  },
  {
    id: 3,
    questionText: 'what is Balis most widely grown agricultural crop?',
    options: ['Rice', 'Banana', 'Coconut', 'Coffe'],
    correctAnswerIndex: 0
  },
  {
    id: 4,
    questionText: 'What Indonesian beer is widely available in Bali?',
    options: ['San Miguel', 'Heineken', 'Bintang', 'Fosters'],
    correctAnswerIndex: 2
  },
  {
    id: 5,
    questionText:
      'The Indonesian archipelago is considered part of a series of volcanically active regions known by what name?',
    options: [
      'Pacific Ring of Fire',
      'Pacific Basin',
      'Pacific Rim',
      'Indo-Australian Plate'
    ],
    correctAnswerIndex: 0
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuesionIndex: 0,
  quizOver: false
};

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
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find(q => q.id === questionId);

      if (!question) {
        throw new Error(
          'Could not find question! Check to make sure you are passing the question id correctly.'
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: state => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuesionIndex += 1;
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
      return initialState;
    }
  }
});
