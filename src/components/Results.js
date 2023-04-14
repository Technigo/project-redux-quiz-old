/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
/* import styled from 'styled-components' */
import { QuestionContainer, Button, P, Wrapper, Highlight, Header, Image } from './GlobalStyles';
import medium from '../assets/medium.gif';
import low from '../assets/low.gif';
import high from '../assets/high.gif';

const Results = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <QuestionContainer>
        <Header>
          Summary{' '}
        </Header>
        {/* This return a fitting gif depending on how many correct answers you got */}
        {(rightAnswers.length <= 2 && <Image src={low} alt="Man taking down a banner with word go Sweden" />)
          || (rightAnswers.length === 3 && (
            <Image src={medium} alt="Regina George says 'You know Swedish?'" />
          ))
          || (rightAnswers.length >= 4 && <Image src={high} alt="Lily James waving with a Swedish flag" />)}
        {/* This display number of correct answers and number of total answers */}
        <P>You got {rightAnswers.length} out of {question.length} correct answers!</P>
        {answer.map((answerr) => {
          //   This returns the chosen answer and the correct answer to every question
          return (
            <div key={answerr.questionId}>
              <P>
                <b>Question: {answerr.question.id}</b>
              </P>
              <span>
                <P correct>Right answer:
                  <Highlight> {answerr.question.options[answerr.question.correctAnswerIndex]}</Highlight>
                </P>
              </span>
              <P yourAnswer>Your answer: {answerr.answer}</P>
            </div>
          );
        })}
        <Button
          type="button"
          onClick={() => {
            dispatch(quiz.actions.restart());
          }}>
          {' '}
          Start over{' '}
        </Button>
      </QuestionContainer>
    </Wrapper>
  );
};
export default Results;