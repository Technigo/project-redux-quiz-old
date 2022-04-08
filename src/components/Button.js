import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';


export const StartButton = () => {
  return ( 
  <button className="start-button">
  <span>START QUIZ HERE!</span></button>
  )
}

export const RestartButton = () => {
  const dispatch = useDispatch();

  const clickRestart = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <div>  
    <button className='btn-restart' type='button' onClick={clickRestart}>
      <span>Restart Quiz</span> 
    </button>
    </div>
  );
};

export const AnswerButton = ({
  item,
  index,
  questionId,
  question,
  answer,
  setDisabled,
  disabled,
}) => {
  const dispatch = useDispatch();
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setDisabled(true);
  };

  return (
    <button
      className={
        !answer
          ? 'defaultbtn'
          : index === question.correctAnswerIndex
          ? 'correct'
          : 'wrong'
      }
      type='submit'
      disabled={disabled}
      onClick={() => onAnswerSubmit(questionId, index)}
      key={item}
    >
      {item}
    </button>
  );
};

export const NextQuestion = ({ setDisabled }) => {
  const dispatch = useDispatch();
  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setDisabled(false);
  };

  return (
    <button className='next' type='submit' onClick={() => nextQuestion()}>
      Next question
    </button>
  );
};
