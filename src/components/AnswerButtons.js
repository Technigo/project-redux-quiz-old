import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const AnswerButtons = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answers = useSelector((state) =>
    state.quiz.answers.find(
      (a) => a.questionId === question.id // question could come from the previous selector in the last example
    )
  );

  const dispatch = useDispatch();
  const onSubmitAnswer = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: id,
        answerIndex: index,
      })
    );
  };

  return (
    <>
      {question.options.map((item, index) => (
        <button
          key={index}
          onClick={() => onSubmitAnswer(question.id, index)}
          style={{
            background: !answers
              ? "white"
              : question.correctAnswerIndex === index
              ? "green"
              : "red",
          }}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default AnswerButtons;
