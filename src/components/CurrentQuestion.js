import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import Summary from "./Summary";
export const CurrentQuestion = () => {
  //getting data from the store

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  //  const answers = useSelector((state) => state.quiz.answers);
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );

  const finalQuestion = useSelector((state) => state.quiz.quizOver);
  //

  //

  //forwarding data to the store
  const dispatch = useDispatch();
  const onAnswersubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };
  const nextQueclick = () => {
    dispatch(quiz.actions.goToNextQuestion({}));
  };

  //////
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (finalQuestion === true) {
    return <Summary />;
  } else {
    return (
      <section className="question-box">
        <div className="box">
          <h1 className="question">
            Question # {question.id} : <span>{question.questionText}</span>
          </h1>
        </div>

        <div className="box">
          <img className="question-image" src={question.img} alt="" />
        </div>

        <div className="box">
          <div className="box">
            {question.options.map((item, index) => {
              return (
                <button
                  className="options"
                  disabled={answer}
                  onClick={() => onAnswersubmit(question.id, index)}
                  key={item}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="box">
          {answer && (
            <div className="correct-or-wrong">{`This is ${
              answer.isCorrect ? "correct !" : "wrong !"
            }`}</div>
          )}
        </div>

        <div className="box">
          <p className="questions-answered">Question: {question.id} / 5</p>

          <button
            className="next-que-button"
            onClick={nextQueclick}
            disabled={!answer}
          >
            {question.id === 5 ? "SUBMIT QUESTION" : "NEXT QUESTION"}
          </button>
        </div>
      </section>
    );
  }
};
