import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { ProgressBar } from './ProgressBar';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );
  console.log(answer);
  // const questions = useSelector((state) => state.quiz.questions);
  // const answers = useSelector((state) => state.quiz.answers);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      {!quizOver && (
        <div>
          <ProgressBar />
          <h2> {question.questionText}</h2>
          <img src={question.image} alt="Question hint" />
          {question.options.map((option, index) => (
            <button
              key={option}
              disabled={answer}
              className={
                !answer
                  ? 'default-options-button'
                  : index === question.correctAnswerIndex
                  ? 'right-option-button'
                  : 'wrong-option-button'
              }
              type="button"
              onClick={() =>
                dispatch(
                  quiz.actions.submitAnswer({
                    questionId: question.id,
                    answerIndex: index
                  })
                )
              }>
              {option}
            </button>
          ))}
          <button
            type="button"
            disabled={!answer}
            onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            Next Question
          </button>
        </div>
      )}
    </>
  );
};
