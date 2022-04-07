import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import SubmittedView from "./SubmittedView";
import Buttons from "./Buttons";
import {
  Card,
  Main,
  QuestionNumber,
  QuestionMaterial,
  Question,
  Results,
  Image,
  OptionBtn,
  AnswerWrapper,
} from "styles";


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
    <Main>
      <Card>
        <QuestionNumber>
          Question {currentQuestionIndex + 1}/{questions.length}
        </QuestionNumber>
        {/* <div> */}
        <QuestionMaterial>{question.material}</QuestionMaterial>
        <Question>{question.questionText}</Question>
        {/* </div> */}
        <Image src={question.image} alt={question.questionText} />
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

        <AnswerWrapper>
          {isAnswered && (
            <Results>{answers[currentQuestionIndex].isCorrect ? "Correct" : "Incorrect"}</Results>
          )}
        </AnswerWrapper>
        <Buttons label={isLastQuestion ? "Finish" : "Next"} disabled={!isAnswered} />
      </Card>
    </Main>
  );
};
export default CurrentQuestion;
