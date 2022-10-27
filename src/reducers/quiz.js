import { createSlice } from '@reduxjs/toolkit';

const questions = [
  {
    id: 1,
    questionText: 'Vilken är den korrekta stavningen av detta ord?',
    options: ['Abonnemang', 'Abbonemang', 'Abbonnemang ', 'Abonemang'],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    questionText: 'Vilken är den korrekta stavningen av detta ord?',
    options: ['Tidslöst', 'Tidlöst', 'Tidlost', 'Tidslost'],
    correctAnswerIndex: 1
  },
  {
    id: 3,
    questionText: 'Vilken är den korrekta stavningen av detta ord?',
    options: ['Ytterligare', 'Ytterliggare', 'Utteligäre', 'Uteliggare'],
    correctAnswerIndex: 0
  },
  {
    id: 4,
    questionText: 'Vilken är den korrekta stavningen av detta ord?',
    options: ['Överaskning', 'Överraskning', 'Overaskning', 'Overraskning'],
    correctAnswerIndex: 1
  },
  {
    id: 5,
    questionText: 'Vilken är den korrekta stavningen av detta ord?',
    options: ['Följdaktligen', 'Följdakligen', 'Följakligen', 'Följaktligen'],
    correctAnswerIndex: 3
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStart: false
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
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

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    restart: () => {
      return initialState;
    },

    startQuiz: (state) => {
      state.quizStart = true;
    }
  }
});
