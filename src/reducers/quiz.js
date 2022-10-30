import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText:
      'What is the correct HTML for referring to an external style sheet?',
    options: [
      '<link rel="stylesheet" type="text/css" href "mystyle.css">',
      '<style src="mystyle.css">',
      '<styles>mystyle.css</styles>'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    questionText: 'Which is the correct CSS syntax?',
    options: [
      '{body: color=black;}',
      'body {color: black;}',
      'body: {color=black}'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 3,
    questionText: 'How do you write "Hello World" in an alert box?',
    options: [
      'msgBox("Hello World");',
      'alert("Hello World);',
      'alertBox("Hello World")'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 4,
    questionText:
      'What is the correct syntax to import a Component from React?',
    options: [
      'import React.Component from "react"',
      'import { Component } from "react"',
      'import Component from "react"'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 5,
    questionText:
      'Redux offers a solution for storing your application state in a single place called...',
    options: ['Status', 'Bank', 'Store'],
    correctAnswerIndex: 2
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  showQuiz: false
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
        isCorrect: question.correctAnswerIndex === answerIndex
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
        state.showQuiz = false;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    /* Use this action to reset the state to the initial state the page had
      when it was loaded.
      This action does not require a payload. */

    restart: () => {
      return initialState;
    },

    startQuiz: (state) => {
      state.showQuiz = true;
    }
  }
});
