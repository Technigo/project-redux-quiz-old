import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      questionText:
        'Created in 1959, COBOL is one of the oldest programming languages still in use. The ideas of this American computer scientist were key to the development of this language.',
      options: [
        'Ada Lovelace',
        'Margaret Hamilton',
        'Grace Hopper',
        'Eva Galperin',
      ],

      correctAnswerIndex: 2,
      // here we added a new property so we had a path to show the correct answer in Summary.js
      correctAnswerName: 'Grace Hopper',
    },
    {
      id: 2,
      questionText:
        'She had a key role as a code-breaker in the Enigma-project that decrypted Nazi Germany’s secret communications during World War II. The cryptanalytic process was developed by her friend Alan Turing.',
      options: [
        'Maria Mitchell',
        'Joan Clarke',
        'Kathleen Antonelli',
        'Adele Goldstine',
      ],
      correctAnswerIndex: 1,
      correctAnswerName: 'Joan Clarke',
    },
    {
      id: 3,
      questionText:
        'Starting as a “human computer” in 1953 doing the calculations that was essential to the many early missions at NASA. This Physicist and mathematician had a key role to the success of the project mercury and the Apollo 11 mission.',
      options: [
        'Betty Holberton',
        'Lixia Zhang',
        'Karen Catlin',
        'Katherine Johnson',
      ],
      correctAnswerIndex: 3,
      correctAnswerName: 'Katherine Johnson',
    },

    {
      id: 4,
      questionText:
        'She is known for being the first computer programmer, and she described her way of work as poetical science.',
      options: [
        'Margaret Hamilton',
        'Ada Lovelace',
        'Joan Clarke',
        'Katherine Johnson',
      ],
      correctAnswerIndex: 1,
      correctAnswerName: 'Ada Lovelace',
    },

    {
      id: 5,
      questionText:
        'She was a woman of all trades. She wasn’t just a Hollywood star, but she also developed a radio guidance system for Allied torpedoes, which helped them in defeating the Axis powers.',
      options: ['Hedy Lamarr', 'Hu Qiheng', 'Michelle Simmons', 'Emily Chang'],
      correctAnswerIndex: 0,
      correctAnswerName: 'Hedy Lamarr',
    },
  ],
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false, //Boolean to determine if the quiz should end
  score: 0, // Set an initial score that will be updated after every answer
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    // This action is triggered when a user selects an answer to the question. The answer is then stored in the `quiz.answers` state
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
        answerIndex, // The index of the selected answer from the question's options.
        question, // A copy of the entire question object
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      });

      // Add or remove 5 points from the score if the question was answered correctly or not.
      if (question.correctAnswerIndex === answerIndex) {
        state.score += 5;
      } else {
        state.score -= 5;
      }
    },

    // Proceed to the next question
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    restart: () => {
      return initialState; // Reset the state to how the page looked like at the start
    },
  },
});
