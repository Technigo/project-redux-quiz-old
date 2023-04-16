import { createSlice } from '@reduxjs/toolkit'

import question1 from '../images/question1.jpg';
import question2 from '../images/question2.jpg';
import question3 from '../images/question3.jpg';
import question4 from '../images/question4.jpg';
import question5 from '../images/question5.jpg';

const questions = [
  {
    id: 1,
    imgUrl: question1,
    questionText: 'What does AI stand for?',
    options: ['Automatic Intelligence', 'Artifical Information', 'Automatic Information', 'Artificial Intelligence'],
    hint: 'Artificial > Automatic. Intelligence > Information.',
    correctAnswerIndex: 3
  },
  {
    id: 2,
    imgUrl: question2,
    questionText: 'When was the term AI first used?',
    options: ['1956', '1943', '2022', '1997'],
    hint: 'Both AI and Tom Hanks were born this year.',
    correctAnswerIndex: 0
  },
  {
    id: 3,
    imgUrl: question3,
    questionText: 'What is the name of Google´s AI Chatbot?',
    options: ['Barry', 'Bard', 'Bert', 'Burt'],
    hint: 'It is also another term for poet.',
    correctAnswerIndex: 1
  },
  {
    id: 4,
    imgUrl: question4,
    questionText: 'Which of the following is an example of AI-technology?',
    options: ['Deep learning', 'Quick learning', 'Shallow learning', 'Heavy learning'],
    hint: 'Shares beginning of name with famous Chicago style pizza.',
    correctAnswerIndex: 0
  },
  {
    id: 5,
    imgUrl: question5,
    questionText: 'The term "Friendly AI" was introduced by...?',
    options: ['Steve Jobs', 'Alan Turing', 'Marvin Minsky', 'Eliezer Yudkowsky'],
    hint: 'Say initials out loud and it almost sounds like AI…',
    correctAnswerIndex: 3
  }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  hintsUsed: 0
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    useHint: (state) => {
      state.hintsUsed += 1
    },

    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    restart: () => {
      return initialState
    }
  }
})
