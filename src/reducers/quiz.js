/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
//   { id: 1, questionText: 'Who set the Olympic record for the 100m dash in 2012?', options: 
// ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 },
//   { id: 2, questionText: 
// 'When was Michael Phelps last named male World Swimmer of the Year?', options: 
// ['2012', '2014', '2016', '2018'], correctAnswerIndex: 2 }
// ]
  {
    id: 1,
    questionText: 'Which of these roses is not white?',
    options: [
      'Desdemona',
      'Louise Bugnet',
      'Winchester Cathedral',
      'Ingrid Bergman',
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 2,
    questionText: 'What do you pick if you pick Ribes uva-crispa?',
    options: [
      'Cherryberries',
      'Currants',
      'Goosberries',
      'Rhubarbs',
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    questionText: 'So beautiful you could just eat them, but which one should you not eat?',
    options: [
      'Marigold',
      'Mezereon',
      'Lilacs',
      'Pansies',
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    questionText: 'Three of these gardenherbs are perennial, one is not. Which one is not?',
    options: [
      'Parsley',
      'Thyme',
      'Mint',
      'Chive',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    questionText: 'Early or latebloomer? Three are early, one is late.',
    options: [
      'Coltsfoot',
      'Crocus',
      'Hummingbird',
      'Cowslip',
    ],
    correctAnswerIndex: 2,
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}
//   quizOver: false,
// };

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    submitAnswer: (state, action) => {
      // const { questionId, answerIndex } = action.payload
      // const question = state.questions.find((q) => q.id === questionId)
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        // throw new Error('Could not find question! 
        // Check to make sure you are passing the question id correctly.')
        throw new Error(
          'Could not find question! Check to make sure you are passing the question id correctly.'
        );
      }

      if (question.options[answerIndex] === undefined) {
        // throw new Error(`You passed answerIndex ${answerIndex}, 
        // but it is not in the possible answers array!`)
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
      })
      // isCorrect: question.correctAnswerIndex === answerIndex,
      // });
    },

    /**
@@ -63,9 +120,9 @@ export const quiz = createSlice({
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        // state.quizOver = true
        state.quizOver = true;
      } else {
        // state.currentQuestionIndex += 1
        state.currentQuestionIndex += 1;
      }
    },

    // @@ -77,8 +134,7 @@ export const quiz = createSlice({
    //  * This action does not require a payload.
    //  */
    restart: () => {
      //       return initialState
      //     }

      //   }
      // })
      return initialState;
    },
  },
});
