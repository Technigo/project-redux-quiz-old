import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { StartEndContainer, Wrapper } from 'styledComponents/Containers';
import { Button } from 'styledComponents/StyledButton';

const StartPage = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <StartEndContainer>
        <h1>Quiz</h1>
        <p>
          Welcome to the technical skills evaluation quiz at SuperBigCorp.
          Answer at least three of the following questions correctly to qualify
          for the job.
        </p>
        <p>Good luck!</p>

        <Button
          type="button"
          onClick={() => {
            dispatch(quiz.actions.startQuiz());
          }}
        >
          Start
        </Button>
      </StartEndContainer>
    </Wrapper>
  );
};

export default StartPage;
