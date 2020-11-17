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

  const quizStarted = useSelector((state) => state.quiz.quizStarted);

  // const questions = useSelector((state) => state.quiz.questions);
  // const answers = useSelector((state) => state.quiz.answers);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <main>
      {!quizOver && quizStarted && (
        <section className="question">
          <ProgressBar />
          <h2> {question.questionText}</h2>
          <img
            src={question.image}
            alt="Question hint"
            className="question__image"
          />
          <div className="question__buttons">
            {question.options.map((option, index) => (
              <button
                key={option}
                disabled={answer}
                className={
                  !answer
                    ? 'question__default--button'
                    : index === question.correctAnswerIndex
                    ? 'question__right--button'
                    : 'question__wrong--button'
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
          </div>

          <button
            className="question__next--button"
            type="button"
            disabled={!answer}
            onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            Next Question
          </button>
        </section>
      )}
    </main>
  );
};
