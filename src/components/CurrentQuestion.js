import React from 'react';
import { useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ButtonQuestion } from './ButtonQuestion';
import { ProgressBar } from './ProgressBar';
import { PictureQuestion } from './PictureQuestion';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  console.log(question);
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const onGoToNextQuestion = (id) => {
    dispatch(quiz.actions.goToNextQuestion({ questionId: id }));
  };

  const getQuestionType = (type) => {
    if (type === 'button') {
      return (
        <ButtonQuestion
          question={question}
          setOnAnswerSubmit={onAnswerSubmit}
          onGoToNextQuestion={onGoToNextQuestion}
        />
      );
    } else if (type === 'picture') {
      return (
        <PictureQuestion
          question={question}
          setOnAnswerSubmit={onAnswerSubmit}
          onGoToNextQuestion={onGoToNextQuestion}
        />
      );
    } else {
      return <div>Other</div>;
    }
  };

  if (!question) {
    return <Header2>Oh no! I could not find the current question!</Header2>;
  }

  return (
    <WrapperSection>
      <ProgressBar
        onGoToNextQuestion={onGoToNextQuestion}
        question={question}
        setOnAnswerSubmit={onAnswerSubmit}
      />
      {getQuestionType(question.type)}
    </WrapperSection>
  );
};

const Header2 = styled.h2`
  margin: 0 0 10px 0;
`;

const WrapperSection = styled.section`
  background-color: black;
  background-image: url(${require(`../pictures/smoke.jpg`)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;
