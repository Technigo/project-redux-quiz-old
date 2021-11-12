import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quiz } from 'reducers/quiz';

const UserNameInput = ({ setDisplayQuestion }) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const userNameGlobal = useSelector((state) => state.quiz.userName);

  if (userNameGlobal === '') {
    return (
      <form
        className="user-input-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(quiz.actions.addUserName({ userName }));
          setDisplayQuestion(true);
        }}>
        <h2>What is your name?</h2>
        <div>
          <input
            className="name-input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required />
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
