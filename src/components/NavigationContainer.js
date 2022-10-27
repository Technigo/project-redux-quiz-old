import React from 'react';
import { useSelector } from 'react-redux';

import { CurrentQuestion } from './CurrentQuestion';
import EndPage from './EndPage';
import StartPage from './StartPage';

const NavigationContainer = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const showQuiz = useSelector((state) => state.quiz.showQuiz);

  if (showQuiz) {
    return <CurrentQuestion />;
  }

  if (quizOver) {
    return <EndPage />;
  }

  // default return
  return <StartPage />;
};

export default NavigationContainer;
