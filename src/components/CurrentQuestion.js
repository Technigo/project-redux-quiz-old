import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import {
  AnswerContainer,
  OptionContainer,
  Wrapper
} from 'styledComponents/Containers';
import {
  Button,
  CorrectAnswerMessage,
  OptionButton
} from 'styledComponents/StyledButton';

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

  const [disabledStyledButton, setDisabledStyledButton] = useState(false);

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
    setDisabledStyledButton(false);
  };

  const statusAnswer = () => {
    if (answer.isCorrect) {
      return 'right';
    } else {
      return 'wrong';
    }
  };

  return (
    <Wrapper alignTop>
      <h1 className="question-title">Question {question.id}:</h1>
      <AnswerContainer>
        <div className="question-text">
          <h4>{question.questionText}</h4>
        </div>

        <OptionContainer>
          {question.options.map((option, index) => {
            return (
              <OptionButton
                isCorrect={answer && index === question.correctAnswerIndex}
                isIncorrect={answer && index !== question.correctAnswerIndex}
                selected={answer && index === answer.answerIndex}
                onClick={() => {
                  submitAnswer(question.id, index);
                  setDisabledStyledButton(true);
                }}
                disabled={disabledStyledButton}
                type="button"
                key={option}
              >
                {option}
              </OptionButton>
            );
          })}
        </OptionContainer>
        <div className="footer">
          <p>
            Question {question.id}/{questionsLength}
          </p>
          {answer && (
            <CorrectAnswerMessage
              rightAnswer={answer.isCorrect}
              wrongAnswer={!answer.isCorrect}
            >
              {`The answer is ${statusAnswer()}`}
            </CorrectAnswerMessage>
          )}
        </div>
      </AnswerContainer>
      <Button type="button" disabled={!answer} onClick={handleNext}>
        Next
      </Button>
    </Wrapper>
  );
};
