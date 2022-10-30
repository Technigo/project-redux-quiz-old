import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Component that lets the user know what question they're on and how many questions are left
export const ProgressBar = () => {
  const questionTotal = useSelector((store) => store.quiz.questions);
  const currentQuestion = useSelector((store) => {
    return store.quiz.questions[store.quiz.currentQuestionIndex];
  });

  return (
    <QuestionCounter className="QuestionCounter">
        Question: {currentQuestion.id} / {questionTotal.length}
    </QuestionCounter>
  );
};

// The local styled components
const QuestionCounter = styled.p`
  font-size: 1.2rem;
`

