import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import SubmittedView from "./SubmittedView";
import {
  QuestionCard,
  QuestionCardWrapper,
  QuestionNumber,
  Question,
  Image,
  OptionBtn,
} from "styles";

import Buttons from "./Buttons";

const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  // const checkAnswer = useSelector((state) => state.correctAnswerIndex)
  const dispatch = useDispatch();
  const isSubmitted = useSelector((state) => state.quiz.quizOver);

  const onAnswerSubmit = (index) =>
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }));

  const checkCorrectAnswer = (index) =>
    question.correctAnswerIndex === index ? <p>Correct</p> : <p>Wrong</p>;

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (isSubmitted) {
    return <SubmittedView />;
  }

  return (
    <QuestionCardWrapper>
      <QuestionCard>
        <QuestionNumber>
          <p>
            Question {currentQuestionIndex + 1}/{questions.length}
          </p>
        </QuestionNumber>
        <div>
          <Question>{question.questionText}</Question>
        </div>
        <Image width={200} src={question.image} alt={question.questionText} />
        {question.options.map((option, index) => {
          return (
            <OptionBtn
              key={option.value}
              type="button"
              onClick={() => {
                onAnswerSubmit(index);
                checkCorrectAnswer(index);
              }}
            >
              {option.label}
            </OptionBtn>
          );
        })}
        <p>{checkCorrectAnswer()}</p>
        <Buttons />
      </QuestionCard>
    </QuestionCardWrapper>
  );
};
export default CurrentQuestion;
