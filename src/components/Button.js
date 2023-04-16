/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const StyledButton = styled.button`

padding: 3rem;
background-color: white;
margin-bottom: 50px;

&.defaultbtn {
}
&.correct {
  border: 5px solid green;
}
&.wrong {
  border: 5px solid red;
}


`

/* We might add this later export const StartButton */

export const RestartButton = () => {
  const dispatch = useDispatch(); // this just has to be here to feth fron the state

  const clickRestart = () => {
    dispatch(quiz.actions.restart()); // fetches restart function from the reducers
  }

  return (
    <StyledButton onClick={clickRestart}>Restart quiz</StyledButton>
  )
}

export const NextQuestion = ({ setDisabled }) => {
  const dispatch = useDispatch();
  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setDisabled(false);
  };

  return (
    <button className="next" type="submit" onClick={() => nextQuestion()}>
      Next question
    </button>
  );
};

export const AnswerButton = ({
  item,
  index,
  questionId,
  question,
  answer,
  disabled
}) => {
  const dispatch = useDispatch();

  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <StyledButton
      className={
        !answer
          ? 'defaultbtn'
          : index === question.correctAnswerIndex
            ? 'correct'
            : 'wrong'
      }
      type="submit"
      disabled={disabled}
      onClick={() => {
        onAnswerSubmit(questionId, index);
        setTimeout(() => nextQuestion(), 2000);
      }}
      key={item}>
      {item}
    </StyledButton>
  );
}

