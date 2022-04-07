import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "reducers/quiz";
import { ProgressBar } from "components/ProgressBar";

import {
  QuestionContainer,
  FlexQuestionDiv,
  QuestionAlternatives,
  QuestionButtons,
  QuestionHeading,
  Question,
  ActionButtons
} from "styles";

export const QuizQuestions = () => {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const questionsLength = useSelector((state) => state.quiz.questions.length);

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    setIsClicked(true)
  };

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsClicked(false)
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  };

  return (
    <main>
      <QuestionContainer>
        <FlexQuestionDiv>
          <QuestionHeading>Question:</QuestionHeading>
          <Question>{question.questionText}</Question>
          <QuestionAlternatives>
            {question.options.map((answer, index) => (
              <QuestionButtons
                key={index}
                disabled={isClicked}
                onClick={() => { onAnswerSubmit(question.id, index) }}
              >{answer}
              </QuestionButtons>
            ))}
          </QuestionAlternatives>
          {question.id + 1 === questionsLength
            ? <ActionButtons disabled={!isClicked} onClick={handleNextQuestion}>Submit Quiz</ActionButtons>
            : <ActionButtons disabled={!isClicked} onClick={handleNextQuestion}>Next question</ActionButtons>
          }
        </FlexQuestionDiv>
        <ProgressBar />
      </QuestionContainer>
    </main>
  )
};
