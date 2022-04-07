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
  const isLastQuestion = questions.length - 1 === currentQuestionIndex;
  const isOver = useSelector((state) => state.quiz.quizOver);

  const onAnswerSubmit = (id, index) =>
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (isOver) {
    return <SubmittedView />;
  }

  return (
    <>
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
                  onAnswerSubmit(question.id, index);
                }}
                disabled={isAnswered}
              >
                {option.label}
              </OptionBtn>
            );
          })}

          {isAnswered && <p>{answers[currentQuestionIndex].isCorrect ? "correct" : "incorrect"}</p>}
          <Buttons label={isLastQuestion ? "Finish" : "Next"} disabled={!isAnswered} />
        </QuestionCard>
      </QuestionCardWrapper>
    </>
  );
};
export default CurrentQuestion;
