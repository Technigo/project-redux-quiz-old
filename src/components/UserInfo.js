import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';

const UserInfo = () => {
  const playerName = useSelector((state) => state.quiz.userName);
  /*-- having this useSelector to get the currentQuestionIndex value from 
      Redux store to find out the current question index in questions array --*/
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const state = useSelector((state) => state.quiz);
  //displaying the information that the user sees at every question
  return (
    <div>
      <p> Name:{state.userName}</p>
      <p>
        You are on question nr. {state.questions[currentQuestionIndex].id} out
        of {state.questions.length}
      </p>
      <ProgressBar />
    </div>
  );
};

export default UserInfo;
