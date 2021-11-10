import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import Summary from "./Summary";
import Counter from "./Counter";
import AnswerButtons from "./AnswerButtons";
// import Questions from "./Questions";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();

  const answers = useSelector((state) =>
    state.quiz.answers.find(
      (a) => a.questionId === question.id // question could come from the previous selector in the last example
    )
  );
  const rightIndex = useSelector(
    (state) => state.quiz.questions[state.quiz.correctAnswerIndex]
  );
  console.log("testin right index", rightIndex);

  const correct = useSelector((state) =>
    state.quiz.answers.find((a) => a.isCorrect === true)
  );

  // console.log("This is correct", correct);

  const quizSlice = useSelector((store) => store.quiz);
  // console.log(quizSlice);

  const nextQuestion = (id) => {
    dispatch(
      quiz.actions.goToNextQuestion({
        questionId: id,
      })
    );
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  return (
    <>
      {quizOver ? (
        <Summary />
      ) : (
        <div>
          <h1>{question.questionText}</h1>
          <img src={question.img} alt="coverImage" />

          <AnswerButtons />
          <Counter />
          {answers ? nextQuestion() : ""}
        </div>
      )}
    </>
  );
};
