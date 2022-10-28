import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Wrapper } from 'styledComponents/Containers';
import { Button } from 'styledComponents/StyledButton';

const EndPage = () => {
  const dispatch = useDispatch();
  const correctAnswers = useSelector(
    (state) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      state.quiz.answers.filter((answer) => answer.isCorrect === true).length
  );
  const answers = useSelector((state) => state.quiz.answers);

  return (
    <Wrapper>
      <h1>Quiz Over</h1>
      <h3>
        You got {correctAnswers} correct answers out of {answers.length}!
      </h3>
      <Button
        type="button"
        onClick={() => {
          dispatch(quiz.actions.restart());
        }}
      >
        Restart
      </Button>
    </Wrapper>
  );
};

export default EndPage;
