/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const StyledButtonContainer = styled.div`
display: flex;
flex-direction: row;
padding: 20px;`

const StyledButton = styled.button`
padding: 2rem;
margin-bottom: 50px;
border-radius: 10px;
font-size: large;
font-weight: bold;

&.defaultbtn {
  background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
  color: #112E2E;
}
&.correct {
  border: 0.3rem inset;
  border-image: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) 1;
  background-color: rgb(2, 75, 48);
  color: white;
}
&.wrong {
  background-color: rgba(77, 0, 19, 0.6);
  color: white;
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
    <StyledButtonContainer>
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
    </StyledButtonContainer>
  );
}

