import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const playerName = useSelector((state) => state.quiz.userName);
  console.log('test', playerName);
  return (
    <div>
      <p> Name:{playerName}</p>
    </div>
  );
};

export default UserInfo;
