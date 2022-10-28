import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

const QuestionCounter = styled.p`
  font-size: 1.3rem;
`

