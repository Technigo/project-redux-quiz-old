import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: '1991 what was the most popular Christmas gift?',
    options: [
      'Nintendo Game Boy (no color)',
      'Sushi sticks',
      'Boombox',
      'Coca Cola fridge'
    ],
    correctAnswerIndex: 0,
    image: './assets/NirvanaNevermindalbumcover.jpg',
    altText: 'Nirvana cover'
  },
  {
    id: 2,
    questionText:
      'At what year was the Portable Cassette Player Recorder the Christmas gift of the year?',
    options: ['1981', '1979', '1975', '1997'],
    correctAnswerIndex: 2,
    image: './assets/Portable-Cassette-Player-Recorder.jpg',
    altText: 'Portable Cassette Player Recorder'
  },
  {
    id: 3,
    questionText: 'In 1988 what was the most popular Christmas gift?',
    options: [
      'Polly pocket',
      'Ghostbusters: Proton Pack and Wand',
      'R2-D2 Toy Box',
      'Lego airport'
    ],
    correctAnswerIndex: 1,
    image: './assets/Turtles.jpg',
    altText: 'Turtles'
  },
  {
    id: 4,
    questionText:
      'What year was Optimus Prime the most popular Christmas present?',
    options: ['1981', '1984', '1987', '1990'],
    correctAnswerIndex: 1,
    image: './assets/optimusprime.jpg',
    altText: 'Optimus Prime'
  },
  {
    id: 5,
    questionText: 'What was the Christmas gift of the year in 1979?',
    options: ['Monopoly', 'BMX bike', 'The Millennium Falcon', 'The Batmobile'],
    correctAnswerIndex: 2,
    image: './assets/christmas1979.jpg',
    altText: 'Family Christmas 1979'
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStarted: false
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
    },

    /**
     * Use this action to progress the quiz to be started.
     *
     * This action does not require a payload.
     */
    startQuiz: (state) => {
      state.quizStarted = true;
    }
  }
});
