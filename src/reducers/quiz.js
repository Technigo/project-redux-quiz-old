import { createSlice } from '@reduxjs/toolkit';
import cloud from '../assets/brain.png';

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: 'In Sweden, what is the typical way to greet someone?',
    options: [
      'Shaking hands',
      ' Hugging',
      'A firm high-five',
      ' A gentle "Hej" followed by awkwardly staring at each other until someone speaks'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    questionText: 'What is the traditional Swedish dish called "Surströmming"?',
    options: [
      'Pickled herring',
      'Fermented fish',
      'Fish-flavored ice cream',
      'Something that should never be eaten indoors or within a 5-mile radius of other humans'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 3,
    questionText:
      'Which of the following traditional Swedish celebrations marks the end of winter and the beginning of spring?',
    options: ['Midsummer', 'Lucia', 'Valborgsmässoafton', 'Jul'],
    correctAnswerIndex: 2
  },
  {
    id: 4,
    questionText: 'What is the national flower of Sweden?',
    options: ['Lily of the valley', 'Bluebells', ' Pyramidal Saxifrage', 'Jul'],
    correctAnswerIndex: 1
  },
  {
    id: 5,
    questionText: 'Which Swedish band is known for their catchy pop hits and unique fashion sense?',
    options: ['ABBA', 'IKEA', 'Ace of Base', 'The Dancing Meatballs'],
    correctAnswerIndex: 0
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
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
    }
  }
});
