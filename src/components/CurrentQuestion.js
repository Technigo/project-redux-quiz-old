import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { AnswerContainer, Wrapper } from 'styledComponents/containers';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const questionsLength = useSelector((state) => state.quiz.questions.length);
  const answer = useSelector(
    (state) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      state.quiz.answers.find((a) => a.questionId === question.id)
    // eslint-disable-next-line function-paren-newline
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // dispatch the the submitAnswer action
  const submitAnswer = (questionId, answerIndex) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId,
        answerIndex
      })
    );
  };

  const handleNext = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  const statusAnswer = () => {
    if (answer.isCorrect) {
      return 'right';
    } else {
      return 'wrong';
    }
  };

  return (
    <Wrapper>
      <h1 className="question-title">Question {question.id}:</h1>
      <AnswerContainer>
        <div className="question-text">{question.questionText}</div>
        {question.options.map((option, index) => {
          return (
            <button
              onClick={() => submitAnswer(question.id, index)}
              type="button"
              key={option}
            >
              {option}
            </button>
          );
        })}
      </AnswerContainer>
      {answer && (
        <div>
          <p>{`The answer is ${statusAnswer()}`}</p>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      <p>
        Question {question.id}/{questionsLength}
      </p>
    </Wrapper>
  );
};
