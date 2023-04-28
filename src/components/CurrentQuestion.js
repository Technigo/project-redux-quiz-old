import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
// import Confetti from 'react-confetti-explosion';
import { Summary } from './summary';
import { ProgressBar } from './progress';
import { Form } from './form';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const [answer, setAnswer] = useState(null);
  const [optionIndex, setOptionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const handleOkayButtonClick = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    setQuestionAnswered(true);
  };

  const handleNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setQuestionAnswered(false);
    setAnswer('');
  };

  return (
    <section>
      {quizOver ? (
        <Summary />
      ) : (
        <div>
          <div>
            <h2> Question {question.id} of 5 </h2>
            <h3> {question.questionText} </h3>

            <div className=" que ">
              {question.options.map((option, index) => {
                return (
                  <Form
                    setAnswer={setAnswer}
                    setOptionIndex={setOptionIndex}
                    answer={answer}
                    questionAnswered={questionAnswered}
                    option={option}
                    index={index}
                    answerIndex={optionIndex}
                    correctIndex={question.correctAnswerIndex} />
                );
              })}
            </div>

            <button
              className="ok"
              type="button"
              onClick={() => handleOkayButtonClick(question.id, optionIndex)}
              disabled={questionAnswered || answer === null}>
              Ok
            </button>
            <button
              className="next"
              type="submit"
              onClick={handleNextButton}
              disabled={!questionAnswered || answer === null}>
              Next
            </button>
          </div>
          <ProgressBar />
        </div>
      )}
    </section>
  );
};
