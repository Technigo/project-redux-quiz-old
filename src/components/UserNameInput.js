import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quiz } from 'reducers/quiz';

const UserNameInput = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const userNameGlobal = useSelector((state) => state.quiz.userName);

  // If user is empty we want display a name input that takes the whole screen. We store the value in the Redux state userName property.
  // If the user name is already there this component is not shown
  if (userNameGlobal === '') {
    return (
      <form
        className="user-input-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(quiz.actions.addUserName({ userName: userName }));
        }}
      >
        <h2>What is your name?</h2>
        <div>
          <input
            className="name-input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="btn name-btn" type="submit">
            PLAY
          </button>
        </div>
      </form>
    );
  } else {
    return <></>;
  }
};

export default UserNameInput;
