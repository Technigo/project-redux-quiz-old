import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!

export const quiz = createSlice({
  name: 'quiz',
  initialState: {
    questions: [
      {
        id: 1,
        type: 'button',
        questionText:
          'On what date does the Hogwarts Express depart the platform to head to Hogwarts?',
        options: [
          '5th September',
          '1st September',
          '31st August',
          '3rd September',
        ],
        correctAnswerIndex: 1,
      },
      {
        id: 2,
        type: 'button',
        questionText:
          'What did Ron call Hermione after Charms class that made her cry?',
        options: [
          'A nightmare',
          'An insufferable know it all',
          'A loser',
          'A try-hard',
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 3,
        type: 'picture',
        questionText:
          'On Harry’s first Hallowe’en at Hogwarts, who was responsible for the troll in the dungeon?',
        options: [
          { name: 'Professor Snape', imgSrc: './pictures/castle.jpg' },
          { name: 'Professor Quirrell', imgSrc: './pictures/castle.jpg' },
          { name: 'Hagrid', imgSrc: './pictures/castle.jpg' },
          { name: 'Draco Malfoy', imgSrc: './pictures/castle.jpg' },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: 4,
        imgSrc: '',
        type: 'picture',
        questionText:
          'Which old Hogwarts relic did Harry pull out of the Sorting Hat?',
        options: [
          "Ravenclaw's Diadem",
          "HufflePuff's Cup",
          'The Sword of Gryffindor',
          "Slytherin's Locket",
        ],
        correctAnswerIndex: 2,
      },
      {
        id: 5,
        imgSrc: '',
        type: 'picture',
        questionText:
          'What position does Harry play on the Gryffindor Quidditch team?',
        options: ['Keeper', 'Beater', 'Chaser', 'Seeker'],
        correctAnswerIndex: 3,
      },
    ],
    answers: [],
    currentQuestionIndex: 0,
    quizOver: false,
  },
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
      return quiz.initialState;
    },
  },
});
