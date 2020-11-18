import { createSlice } from "@reduxjs/toolkit";

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: "What does Vans alarm require to be turned off?  ",
    options: [
      "Sing a song",
      "To solve a math problem",
      "Speak french",
      "Throw it against the wall",
    ],
    correctAnswerIndex: 1,
  },

  {
    id: 2,
    questionText: "What is one of Matildas superpowers ?",
    options: ["she can juggle with 6 balls", "she can yodel", "she can do a handstand for 10 min", "she can rap"],
    correctAnswerIndex: 3,
  },

  {
    id: 3,
    questionText: "Who has Poya shaken hands with?",
    options: [
      "Zlatan Ibrahimovic",
      "Barack Obama",
      "Steve Jobs",
      "Ingvar Kamprad",
    ],
    correctAnswerIndex: 2,
  },

  {
    id: 4,
    questionText:
      "Of the following Technigo staff, who dreams of traveling the world on a motorcycle?",
    options: ["Petra", "Sandra", "Maks", "Rebecca"],
    correctAnswerIndex: 3,
  },

  {
    id: 5,
    questionText: "Maks has not always been working with tech, what is one of the things that he has worked as before?",
    options: ["shepherd", "bartender", "professor", "kindergarden teacher"],
    correctAnswerIndex: 0,
  },

  {
    id: 6,
    questionText:
      "Petra is quite adventerous, what of the following has she done ?",
    options: ["competed in parkour", "bungee jumping in a nightclub", "worked as a stuntwoman", "driven a formula 1 car"],
    correctAnswerIndex: 1,
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
};

export const quiz = createSlice({
  name: "quiz",
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
          "Could not find question! Check to make sure you are passing the question id correctly."
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
