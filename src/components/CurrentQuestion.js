import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import Summary from "./Summary";

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

  const correct = useSelector((state) =>
    state.quiz.answers.find((a) => a.isCorrect === true)
  );

  console.log("This is correct", correct);

  const quizSlice = useSelector((store) => store.quiz);
  console.log(quizSlice);
  const counter = useSelector((store) => store.quiz.currentQuestionIndex);
  console.log(counter);
  const nextQuestion = (id) => {
    dispatch(
      quiz.actions.goToNextQuestion({
        questionId: id,
      })
    );
  };

  const onSubmitAnswer = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: id,
        answerIndex: index,
      })
    );
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  return (
    <>
      <div>
        <h1>Question: {question.questionText}</h1>
        <iframe
          src={question.iframe.src}
          width="480"
          height="360"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        {/* <p>
          <a href="https://giphy.com/gifs/gunsnroses-guns-n-roses-welcome-to-the-jungle-26wkBaMFVpVW6rUS4">
            via GIPHY
          </a>
        </p> */}

        {question.options.map((item, index) => (
          <button key={item} onClick={() => onSubmitAnswer(question.id, index)}>
            {item}
          </button>
        ))}
        {answers ? nextQuestion() : ""}
      </div>
      <div>{counter + 1}/5</div>
      {quizOver && <Summary />}
    </>
  );
};
