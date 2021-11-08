import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );
  const correct = useSelector((state) =>
    state.quiz.answers.find((a) => a.isCorrect === true)
  );

  console.log(answer);
  console.log(correct);
  const quizSlice = useSelector((store) => store.quiz);
  // console.log(quizSlice);

  const dispatch = useDispatch();

  const onSubmitAnswer = (id, index, answerIndex) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: id,
        answerIndex: index,
        answer: question.options[answerIndex],
      })
    );
    if (correct) {
      alert("Yay");
    } else alert("Noo");
  };

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
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index, answer) => (
        <button
          value={answer}
          key={item}
          onClick={() => onSubmitAnswer(question.id, index)}
        >
          {item}
        </button>
      ))}
      <button onClick={() => nextQuestion()}>Next</button>
    </div>
  );
};
