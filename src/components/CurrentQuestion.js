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
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const isAnswered = currentQuestionIndex + 1 === answers.length;
  const readyToSubmit = questions.length - 1 === currentQuestionIndex;
  const isOver = useSelector((state) => state.quiz.quizOver);

  const onAnswerSubmit = (index) =>
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }));

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (isOver) {
    return <SubmittedView />;
  }

  return (
    <>
      {/* <h2>{question.questionText}</h2>
      <img width={200} src={question.image} alt={question.questionText} /> */}
      {/* {question.options.map((option, index) => {
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onAnswerSubmit(index);
            }}
          >
            {option.label}
          </button>
        );
      })} */}
      {/* <Buttons
        label={readyToSubmit ? "Submit" : "Next"}
        disabled={currentQuestionIndex === answers.length}
      /> */}
      {/* <p>
        Question {currentQuestionIndex + 1} of {questions.length}
      </p> */}
      {/* {isAnswered && <p>{answers[currentQuestionIndex].isCorrect ? "correct" : "incorrect"}</p>} */}

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
                }}
              >
                {option.label}
              </OptionBtn>
            );
          })}

          {isAnswered && <p>{answers[currentQuestionIndex].isCorrect ? "correct" : "incorrect"}</p>}
          <Buttons
            label={readyToSubmit ? "Submit" : "Next"}
            disabled={currentQuestionIndex === answers.length}
          />
        </QuestionCard>
      </QuestionCardWrapper>
    </>
  );
};
export default CurrentQuestion;
