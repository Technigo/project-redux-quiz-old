import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

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
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(quiz.actions.addUserName({ userName: userName }));
        }}
      >
        <label>
          Put your username
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <button type="submit">PLAY</button>
      </form>
    );
  } else {
    return <></>;
  }
};

export default UserNameInput;
