/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: 'What is React?',
    options: [
      'A front-end JavaScript library',
      'A back-end programming language',
      'A mobile application development platform',
      'A database management system',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    questionText: 'What is JSX?',
    options: [
      'A type of HTML used in React components',
      'A JavaScript extension for writing React code',
      'A CSS framework for styling React components',
      'A backend server for React applications',
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    questionText: 'What is the Virtual DOM?',
    options: [
      'A real-time representation of the HTML DOM used for performance optimization',
      'A way to manage multiple React components on a page',
      'A tool for debugging React applications',
      'A database used to store React component data',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    questionText: 'What is a React component?',
    options: [
      'A small, reusable piece of code that can be rendered on a web page',
      'A programming language used to create React applications',
      'A database used to store React component data',
      'A tool for debugging React applications',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    questionText: 'What is the purpose of state in React?',
    options: [
      'To store and manage data that can change over time',
      'To render components on the page',
      'To handle user events like clicks and keyboard inputs',
      'To control the overall layout of the web page',
    ],
    correctAnswerIndex: 0,
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
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
      const question = state.questions.find((q) => q.id === questionId);

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
        isCorrect: question.correctAnswerIndex === answerIndex,
      });
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
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
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
    },
  },
});
